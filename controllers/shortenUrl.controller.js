const dotenv = require("dotenv");
dotenv.config();
const shortenModel = require("../models/shorten.model")

const publicHost = process.env.HOST

const genrateShortenUrl = async(req,res) => {

    const shorten = new shortenModel({
        url:req.body.url,
        shortenName:req.body.shortenName,
        visits:req.body.visits,
        bitLink:`${publicHost}/${req.body.shortenName}`
    })

   await shorten.save().then((result)=>{
        res.status(201).send({
            message:`Shorten URL Genrated Successfully`,
            success:true,
            shortenUrl:`${publicHost}/${result.shortenName}`,
        })

    }).catch((error)=>{
        res.status(500).send({
            message:`Something went worong in Api Side`,
            success:false,
            error
        })
    })

}

const redirectByLink = async(req,res) => {

    try {
        const shortenName = req.params.shortenName;

        const originalLink = await shortenModel.findOne({shortenName})

        console.log(originalLink);

        if(!originalLink){
            console.log("error")
        }

        res.redirect(originalLink.url)
    } catch (error) {
        res.status(500).send({
                    message:`Something went worong in Api Side`,
                    success:false,
                    error
                })
    }

}

module.exports = { genrateShortenUrl, redirectByLink }