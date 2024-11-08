const validateURL = async (req, res, next) =>{
    const { url } = req.body;
    if(!url){
            return res.json({message:'Invalid Url'})
    }
    next();
}

module.exports = {validateURL}