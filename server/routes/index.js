const express = require('express')
const router = express.Router()

//Home page
router.get('/', (req,res) => {
    res.send('<h1>This is the server!</h1>')
})

module.exports = router