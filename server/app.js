const express = require('express')
const passport = require('passport')
const localStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//Database configuration
const db_string = process.env.MONGODB_CONNECTION_STRING

mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => console.log('Connection to database established!'))
.catch(err => console.log(err))    

const port = process.env.PORT || 5000

app.use(express.json())
app.use('/', require('./routes/index'))

app.use('/users', require('./routes/users'))

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})