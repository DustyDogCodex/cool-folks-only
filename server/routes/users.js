const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

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
                res.send('fail')
            } else {
                //new username, in which case we direct them to the successful registration page
                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password
                })

                //hashing password before storing
                bcrypt.genSalt(20, (err,salt) => {
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if(err) throw err

                        //setting password in newUser object to the newly hashed password
                        newUser.password = hash

                        //time to save our user info
                        newUser.save()
                            .catch(err => console.log(err))
                    })
                })

                console.log(req.body, newUser)
                res.send('success')
                }
            }
        )
    }
)

module.exports = router