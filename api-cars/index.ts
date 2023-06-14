// const express = require("express")
import express, { Request, Response, NextFunction } from "express"
import fs from "fs"
const app = express();
console.log("Server is ok")
const cars = [{
    "Name": "chevrolet chevelle malibu",
    "Miles_per_Gallon": 18,
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Acceleration": 12,
    "Year": "1970-01-01",
    "Origin": "USA"
},
{
    "Name": "buick skylark 320",
    "Miles_per_Gallon": 15,
    "Cylinders": 8,
    "Displacement": 350,
    "Horsepower": 165,
    "Weight_in_lbs": 3693,
    "Acceleration": 11.5,
    "Year": "1970-01-01",
    "Origin": "USA"
}]
type CarsType = typeof cars[0];
function getCars(type?: string): Array<CarsType> {
    if (!type) return cars;
    return cars.filter(c => c.Name === type)
}
app.get("/cars", (req: Request, res: Response, next: NextFunction) => {

    try {
        res.json({ result: getCars(), message: "the result are ok!!" })
    } catch (error) {
        // send error to client
        res.status(500).send("something went wrong!")
    }

})

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
