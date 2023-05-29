const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Its works!")
})
app.post("/users", (req, res) => {
    res.status(201).send(req.body)
})

app.listen(process.env.PORT, ()=> {
    console.log("Nuestros servidor esta en el port :" + process.env.PORT)
});