const express = require('express')

const router = express.Router()

router.get('/login', (req,res) => {
    res.send('<h1>This is the login page!</h1>')
})

router.get('/register', (req,res) => {
    res.send('<h1>This is the register page!</h1>')
})

//handling post requests allowing new users to register their usernames.
router.post('/register', (req,res) => {
    console.log(req.body)
    res.send('hello from the post route!')
})

module.exports = router