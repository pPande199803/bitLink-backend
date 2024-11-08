const mongoose = require("mongoose");

const shortenSchema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    shortenName:{
        type:String,
        required:true
    },
    visits:{
        type:Number,
        default:0
    },
    bitLink:{
        type:String
    }
})


module.exports = new mongoose.model("shortenUrl", shortenSchema)