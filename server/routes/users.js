const express = require('express')
const router = express.Router()

//User model
const User = require('../models/Users')

router.get('/login', (req,res) => {
    res.send('<h1>This is the login page!</h1>')
})

router.get('/register', (req,res) => {
    res.send('<h1>This is the register page!</h1>')
})

//handling post requests allowing new users to register their usernames.
router.post('/register', (req,res) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if(user){
                //username already exists in our database
                //in this case, registeration fails and we direct them to the failed register page
                res.redirect('http://localhost:5173/register/fail')
            } else {
                //new username, in which case we direct them to the successful registration page
                console.log(req.body, 'hello from the post route!')
                res.redirect('http://localhost:5173/register/success')
            }
        })
})

module.exports = router