// const express = require("express")
import express, { Request, Response, NextFunction } from "express"
import fs from "fs"
import { carsRouter } from "./routes/cars";
const app = express();
console.log("Server is ok")

app.use("/cars", carsRouter)

function validateInputText(req: Request, res: Response, next: NextFunction) {
    const { text } = req.query
    if (typeof text === 'string' && text.length > 20) {
        next(new Error("Text length is over max characters: 20")) // go to 72
    } else {
        next()
    }
}
app.get("/log", validateInputText, (req: Request, res: Response, next: NextFunction) => {
    try {
        const { text } = req.query;
        if (!text) throw new Error("Missing text value")
        fs.appendFile("log.txt", `${text}\n`, (err) => {
            console.log(err)
            if (err) throw new Error("File issue")
            return res.send("log written")
        })
    } catch (error) {
        next(error)
    }
})

app.get("/log-file", (req: Request, res: Response, next: NextFunction) => {
    try {
        // res.download("log.txt")
        fs.readFile("log.txt", 'utf8', (err, data) => {
            console.log(data)
            if (err) throw new Error("File issue")
            return res.json({ d: data })
        })
    } catch (error) {
        next(error)
    }
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(4000, () => {
    console.log("connected, to the port: 4000")

})
