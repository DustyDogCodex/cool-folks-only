const mongoose = require('mongoose')

//Creating our schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }, 
})

//creating a model from our UserSchema
const User = mongoose.model('User', UserSchema)

module.exports = User