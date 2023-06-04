const axios = require("axios")
const fs = require("fs")

async function loadUsers() {

    try {
        const result = await axios.get("https://randomuser.me/api/");
        const { data } = result;
        const { email } = data.results[0]

        if (email) {
            const res = await appendEmailIntoFile(email)
            fs.appendFileSync("./log.txt", `${res}`)
        }

    } catch (error) {
        console.log(error)
        console.log("something went wrong")
    }
}

async function appendEmailIntoFile(email) {
    return new Promise((resolve, reject) => {
        fs.appendFile("./users.txt", `${email}\n`, function (err) {
            if (err) {
                return reject("Error")
            } else {
                return resolve("user write done")
            }
        })
    })
}


loadUsers()
loadUsers()
loadUsers()
loadUsers()
loadUsers()
loadUsers()
loadUsers()
