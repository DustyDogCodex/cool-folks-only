const express = require('express')
const passport = require('passport')
const localStrategy = require('passport-local')
const bcrypt = require('bcryptjs')

const app = express()

app.use(express.json())

const port = process.env.PORT || 5000

app.use('/', require('./routes/index'))

app.use('/users', require('./routes/users'))

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})