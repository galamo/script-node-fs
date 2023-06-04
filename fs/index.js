const fs = require("fs")
// const axios = require("axios") // need to install

fs.appendFile("./log_noy.txt", `[${new Date().toISOString()}] !!!!This is my first row\n`, () => {
    console.log("finish writing to ./log_noy.txt")
})

fs.appendFile("./log.txt", `[${new Date().toISOString()}] !!!!This is my first row\n`, () => {
    console.log("finish writing to ./log.txt")
})


// fs.appendFileSync("./log_noy.txt", `[${new Date().toISOString()}] !!!!This is my first row\n`)

// fs.appendFileSync("./log.txt", `[${new Date().toISOString()}] !!!!This is my first row\n`)
console.log(Object.keys(fs))
console.log("Finish")