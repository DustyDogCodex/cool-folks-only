const express = require('express')
const cors = require('cors')
const passport = require('passport')
const localStrategy = require('passport-local')
const sessions = require('express-sessions')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//Database configuration
const db_string = process.env.MONGODB_CONNECTION_STRING
//connecting to database
mongoose.connect(db_string, { useNewUrlParser: true })
.then(() => console.log('Connection to database established!'))
.catch(err => console.log(err))    

//setting up CORS so client can send requests to the server. Client is hosted at port 5173 for dev.
app.use(cors())

app.use(express.json())
app.use('/', require('./routes/index'))

app.use('/users', require('./routes/users'))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})