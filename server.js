///////////////////////////////
// DEPENDENCIES
////////////////////////////////

require("dotenv").config()
// pull PORT from .env, give default value of 3000
const { DATABASE_URL, PORT = 3000 } = process.env
// import express
const express = require("express")
// create application object
const app = express()
//import mongoose
const mongoose = require("mongoose")
// import middleware
const cors = require("cors")
const morgan = require("morgan")

//import models
const Apartment = require('./models/apartments.js')
const Roommate = require('./models/roommates.js')

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
//In .env add this to run mongodb locally
// DATABASE_URL = 'mongodb://localhost:27017/roomiefinderz'

mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })

mongoose.connection.on("open", () => console.log("Youre connected to mongoose"))
  .on("close", () => console.log("You are disconnected"))
  .on("error", (error) => console.log(error))

///////////////////////////////
// MODELS
///////////////////////////////
//Move to ./models/

///////////////////////////////
// SEED DATA
//////////////////////////////

//Comment these lines out to run one time for seed data
// const apartmentSeed = require('./data/apartment-seed.js')
// Apartment.create(apartmentSeed)

// const roommateSeed = require('./data/roommate-seed.js')
// Roommate.create(roommateSeed)

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

///////////////////////////////
// Controllers Middleware
////////////////////////////////
// app.use('/sessions', sessionsController)

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