const express = require("express")

const app = express();

app.use((request, response, next) => {
    const { accessToken } = request.query;
    if (accessToken && accessToken === "access_token_jb") {
        return next()
    } else {
        response.json({ message: "You dont have access token" })
    }
})

app.use((request, res, next) => {
    console.log(request.query)
    next()
})

app.get("/user", (request, response) => {
    a
    return response.status(200).send("users api is working")
})
app.get("/add-user", (request, response) => {
    return response.status(200).send("User added ")
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(5500, () => {
    console.log("Server is listening")
})