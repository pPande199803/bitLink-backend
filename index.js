const os = require("os")
const express = require("express")
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const dbConnection = require("./db/db.connection")
const urlRouter = require("./routes/url.route")

const app = express();
const PORT = process.env.PORT || 3500;
// const machine = os.networkInterfaces()["Wi-Fi"][1].address
// const appip = machine;

// const appaddress = `http://[${appip}]:${PORT}/`
// const test = os.networkInterfaces()
// console.log(appip)
// console.log(appaddress)
// console.log(test)
const uri = process.env.MONGO_URL

app.use(cors());
app.use(express.json());

// db connection

dbConnection(uri)



app.get('/', (req,res)=>{
    res.send("Server is running..")
})

app.use('/', urlRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on Port- ${PORT}`)
})

