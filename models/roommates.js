const mongoose = require('mongoose')

// Roommate Schema
const RoommateSchema = new mongoose.Schema({
    picture: String,
    name: String,
    age: Number,
    gender: String,
    smoker: String,
    morningOrNight: String,
    roommateOrRoom: String,
    major: String,
    interests: Array,
  
  }, { timestamps: true })
 
 const Roommate = mongoose.model("Roommate", RoommateSchema)

 //Make this exportable to be accessed in server.js
module.exports = Roommate
 