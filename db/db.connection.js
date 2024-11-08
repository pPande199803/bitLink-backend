const mongoose = require("mongoose");

const dbConnection = (uri) =>{
    try {
        mongoose.connect(uri)
        console.log(`Database Connection SuccessFully..`)
    } catch (error) {
        console.log(`Database Not Connected...`)
    }
}

module.exports = dbConnection