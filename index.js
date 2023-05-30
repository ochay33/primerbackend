const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

require("./database/database")

const routes = require("./routes/routes")    

app.use(cors())
app.use(express.json())
app.use("/api/", routes)

console.log(process.env.MONGO_URI)

app.listen(process.env.PORT, ()=> {
    console.log("Nuestros servidor esta en el port :" + process.env.PORT)
});