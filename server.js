///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config()
// pull PORT from .env, give default value of 3000
const { PORT = 3000 } = process.env
// import express
const express = require("express")
// create application object
const app = express()
//import mongoose
const mongoose = require("mongoose")
// import middleware
const cors = require("cors")
const morgan = require("morgan")
// import bcrypt -- FOR LOGIN/USERS
const bcrypt = require('bcrypt')
// Controllers
const sessionsController = require('./controllers/sessions') 

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// mongoose.connect(PORT, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })

//   mongoose.connection.on("open", () => console.log("Youre connected to mongoose"))
//   .on("close", () => console.log("You are disconnected"))
//   .on("error", (error) => console.log(error))

///////////////////////////////
// MODELS
///////////////////////////////
const ApartmentSchema = new mongoose.Schema({
    userName: String,
    post: Boolean,
    lookFor: Boolean,
    shareRoom: Boolean,
    bedroom: Number,
    bathroom: Number,
    kitchen: Boolean,
    priceRange: [{
        lowest: Number,
        highest: Number
    }],
    date: [{
        start: Date,
        end : Date
    }],
    location: String,
    note: String
  }, { timestamps: true })
  const Apartment = mongoose.model("Apartment", ApartmentSchema)


 // Roommate Schema
  const roommateSchema = new mongoose.Schema({
    Name: String,
    age: Number,
    gender: String,
    housingStyleWanted: String,
    smoker: Boolean,
    earlyRiser: Boolean,
    major: String,
    interests: String,
  })
const Roommate = mongoose.model("Roommate", roommateSchema)

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

///////////////////////////////
// Controllers Middleware
////////////////////////////////
app.use('/sessions', sessionsController)

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req,res) => {
    res.send("hello world!")
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))