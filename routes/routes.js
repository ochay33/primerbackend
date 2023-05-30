const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).send("It works NOW!")
})

router.post("/users", (req, res) => {
	res.status(201).send({ ...req.body, dami: "no cortes a luz" })
})

module.exports = router