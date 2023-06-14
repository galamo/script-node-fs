import express, { Request, Response, NextFunction } from "express"

const carsRouter = express.Router()

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
carsRouter.use((req, res, next) => {
    console.log("in cars router...")
    next()
})
carsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({ result: getCars(), message: "the result are ok!!" })
    } catch (error) {
        // send error to client
        res.status(500).send("something went wrong!")
    }
})


carsRouter.get("/add-cars", (req, res, next) => {
    res.send("|addCars|")
})

carsRouter.get("/delete-cars", (req, res, next) => {
    res.send("|deleteCars|")
})

export { carsRouter }