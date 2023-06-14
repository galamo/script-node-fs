const express = require("express")
const fs = require("fs")
const app = express();

// # Write new API
// ## PORT 4000
// ### Entrypoints
// 1. GET /cars - find some api that return cars and copy paste the content into the code
// 2. GET /log?text="<SOME_TEXT>" print the text into a file (log.txt) use `append`
// 3. create middleware `app.use` that will validate `text` to max 20 characters  ( if the text contains more than 20 characters return response to the client with error)
// 4. GET /log-file will return the log.txt content
// 5. create a draw.io of your API with the relations 

app.get("/cars", (req, res, next) => {

    try {
        // send something to client
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
        res.json({ result: cars, message: "the result are ok!!" })
    } catch (error) {
        // send error to client
        res.status(500).send("something went wrong!")
    }

})

function validateTextInput(req, res, next) {
    const { text } = req.query
    if (typeof text === 'string' && text.length > 20) {
        next(new Error("Text length is over max characters: 20")) // go to 72
    } else {
        next()
    }
}
app.get("/log", validateTextInput, (req, res, next) => {
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

app.get("/log-file", (req, res, next) => {
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

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(4000, () => {
    console.log("connected, to the port: 4000")

})