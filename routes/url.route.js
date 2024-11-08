const router = require("express").Router();
const {validateURL} = require("../middleware/validUrl")
const { genrateShortenUrl, redirectByLink } = require('../controllers/shortenUrl.controller')

router.post("/shorten", validateURL, genrateShortenUrl);

router.get('/:shortenName', redirectByLink)



module.exports = router