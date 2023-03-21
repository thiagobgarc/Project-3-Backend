const mongoose = require('mongoose')
const Schema = mongoose.Schema
///////////////////////////
// LOGIN/REGISTRATION SCHEMA
///////////////////////////
// DECLARED VARIABLE USER TO MONGOOSE
// USERNAME STRING REQUIRED
const userSchema = new Schema({
    username:
    {
        type: String,
        unique: true,
        required: true
    },
    // PASSWORD STRING REQUIRED
    password:
    {
        type: String
    }
})
// MONGOOSE MODEL
const User = mongoose.model("User", userSchema)

// EXPORT USER
module.exports = User
