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
    "Origin": "USA",
    lp: "abc123"
},
{
    Name: "buick skylark 320",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 3693,
    Acceleration: 11.5,
    Year: "1970-01-01",
    Origin: "USA",
    lp: "def456"
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

carsRouter.get("/add-cars", (req, res) => {
    res.send("|addCars|")
})

carsRouter.get("/lp/:lp", (req, res) => {
    const car = cars.find(c => c.lp === req?.params?.lp)
    console.log(car)
    if (car) return res.json(car)
    else return res.status(404).send("car not found")
})


carsRouter.get("/delete-cars", (req, res) => {
    res.send("|deleteCars|")
})

export { carsRouter }