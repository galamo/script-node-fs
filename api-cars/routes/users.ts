import users from "../users.data.json"
import express from "express";
const router = express.Router();

let globalUser = [...users];

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
const usersRouter = router;


export { usersRouter };