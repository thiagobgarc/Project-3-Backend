const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Roommate Schema
const roommateSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    smoker: Boolean,
    earlyRiser: Boolean,
    major: String,
    interests: Array,
    seekingRoommate: Boolean,
    seekingRoom: Boolean,
  }, { timestamps: true })
 
 const Roommate = mongoose.model("Roommate", roommateSchema)

 //Make this exportable to be accessed in server.js
module.exports = Roommate
 