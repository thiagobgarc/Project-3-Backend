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
    name: String,
    age: Number,
    gender: String,
    housingStyleWanted: Array,
    smoker: Boolean,
    earlyRiser: Boolean,
    major: String,
    interests: Array,
  })
const Roommate = mongoose.model("Roommate", roommateSchema)

///////////////////////////////
// SEED DATA
//////////////////////////////
// Apartment Seed


// Roommate Seed
Roommate.create ([
    {
       name: 'John Doe',
       age: 19,
       gender: 'male',
       housingStyleWanted: ['dorm'],
       smoker: false,
       earlyRiser: true,
       major: 'biology',
       interests: ['sports', 'movies', 'hiking'],
    },
    {
       name: 'Elizabeth Walker',
       age: 18,
       gender: 'female',
       housingStyleWanted: ['dorm'],
       smoker: false,
       earlyRiser: false,
       major: 'economics',
       interests: ['fashion', 'working out', 'music'],
    },
    {
       name: 'Priya Jain',
       age: 20,
       gender: 'female',
       housingStyleWanted: ['apartment', 'house'],
       smoker: false,
       earlyRiser: true,
       major: 'computer science',
       interests: ['dancing', 'reading', 'sports'],
    },
    {
       name: 'Kyrie Jackson',
       age: 21,
       gender: 'male',
       housingStyleWanted: ['apartment'],
       smoker: false,
       earlyRiser: true,
       major: 'physics',
       interests: ['working out', 'basketball', 'music'],
    },
    {
       name: 'Layla Abbas',
       age: 18,
       gender: 'female',
       housingStyleWanted: ['dorm'],
       smoker: false,
       earlyRiser: false,
       major: 'english',
       interests: ['writing', 'reading', 'baking'],
    },
    {
       name: 'Jun Park',
       age: 22,
       gender: 'male',
       housingStyleWanted: ['house'],
       smoker: true,
       earlyRiser: true,
       major: 'economics',
       interests: ['music', 'traveling', 'fashion'],
    },
    {
       name: 'Sasha Smith',
       age: 21,
       gender: 'female',
       housingStyleWanted: ['apartment', 'house'],
       smoker: false,
       earlyRiser: true,
       major: 'gender studies',
       interests: ['sports', 'reading', 'working out'],
    },
    {
       name: 'Allie Jones',
       age: 19,
       gender: 'female',
       housingStyleWanted: 'dorm',
       smoker: true,
       earlyRiser: false,
       major: 'mathematics',
       interests: ['movies', 'baking', 'dancing'],
    }
 ]) 
console.log(Roommate)
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