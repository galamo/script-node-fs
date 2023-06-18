import users from "../users.data.json"
import express from "express";
const router = express.Router();

let globalUser = [...users];


router.get("/", function (req, res, next) {
    res.json({ globalUser }) // we are doing find!
})

router.get("/email/:email", function (req, res, next) {
    res.json({ message: "ok" }) // we are doing find!
})

router.get("/gender/:gender", function (req, res, next) {
    res.json({ message: "ok" }) // we are doing filter!
})

router.delete("/email/:email", function (req, res, next) {
    const { email } = req.params
    // validate email is valid email
    // using joi / zod validation
    globalUser = globalUser.filter((currentUser => currentUser.email !== req.params.email?.toLowerCase()))
    res.json({ message: "deleted", globalUser }) // we are doing find!
})

router.post("/", function (req, res, next) {
    const { email, age, gender, balance, company } = req.body
    if (typeof email !== 'string' || typeof age !== 'number') return res.status(400).send("email/age is incorrect")
    globalUser.push({ email, age, gender, balance, company, picture: "", name: email })
    return res.send("User added!")
})

const usersRouter = router;


export { usersRouter };