const express = require('express')
const passport = require('passport')
const localStrategy = require('passport-local')
const bcrypt = require('bcryptjs')

const app = express()

app.use(express.json())

const port = process.env.PORT || 5000

app.get('/', (req,res) => {
    res.send('<h1>This is the server!</h1>')
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})