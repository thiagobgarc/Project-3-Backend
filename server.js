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
// const sessionsController = require('./controllers/sessions') 

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
const Appartments =
    [
      {
        userName: 'aalexander',
        post: true,
        lookFor: false,
        shareRoom: false,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '05/15/2023',
            end : '07/15/2023'
        }],
        location: 'University of Connecticut',
        note: ''
      }, {
        userName: 'lheffer',
        post: true,
        lookFor: false,
        shareRoom: true,
        bedroom: 2,
        bathroom: 2,
        kitchen: true,
        priceRange: [{
            lowest: 1500,
            highest: 1700
        }],
        date: [{
            start: '05/01/2023',
            end : '08/15/2023'
        }],
        location: 'University of Pennsylvania',
        note: ''
      }, {
        userName: 'mPribanic',
        post: false,
        lookFor: false,
        shareRoom: false,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 700,
            highest: 9000
        }],
        date: [{
            start: '05/15/2023',
            end : '07/15/2023'
        }],
        location: 'University of Boston',
        note: 'lower price please'
      },
      {
        userName: 'jjackson',
        post: false,
        lookFor: false,
        shareRoom: true,
        bedroom: 1,
        bathroom: 1,
        kitchen: true,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '05/15/2023',
            end : '09/15/2023'
        }],
        location: 'NorthEastern',
        note: ''
      }, {
        userName: 'tWilliam',
        post: true,
        lookFor: true,
        shareRoom: false,
        bedroom: 3,
        bathroom: 2,
        kitchen: true,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '08/15/2023',
            end : '05/15/2024'
        }],
        location: 'Princeton',
        note: ''
      }, {
        userName: 'jritch',
        post: true,
        lookFor: false,
        shareRoom: true,
        bedroom: 2,
        bathroom: 2,
        kitchen: false,
        priceRange: [{
            lowest: 900,
            highest: 11000
        }],
        date: [{
            start: '05/15/2023',
            end : '07/15/2023'
        }],
        location: 'University of Pittsburgh',
        note: ''
      },
      {
        userName: 'cpavoz',
        post: true,
        lookFor: false,
        shareRoom: false,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '05/15/2023',
            end : '07/15/2023'
        }],
        location: 'University of Rhode Island',
        note: ''
      }, {
        userName: 'pfrancis',
        post: false,
        lookFor: false,
        shareRoom: false,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '05/15/2023',
            end : '08/15/2023'
        }],
        location: 'University of Virginia',
        note: ''
      }, {
        userName: 'pkeane',
        post: false,
        lookFor: true,
        shareRoom: true,
        bedroom: 3,
        bathroom: 2,
        kitchen: true,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '08/15/2023',
            end : '05/15/2024'
        }],
        location: 'NY University',
        note: ''
      },
      {
        userName: 'rloren',
        post: true,
        lookFor: false,
        shareRoom: false,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '05/15/2023',
            end : '07/15/2023'
        }],
        location: 'University of Albany',
        note: ''
      }, {
        userName: 'cgonzales',
        post: false,
        lookFor: false,
        shareRoom: false,
        bedroom: 1,
        bathroom: 3,
        kitchen: false,
        priceRange: [{
            lowest: 900,
            highest: 11000
        }],
        date: [{
            start: '06/15/2023',
            end : '07/15/2023'
        }],
        location: 'Rutgers University',
        note: ''
      }, {
        userName: 'jgomez',
        post: false,
        lookFor: false,
        shareRoom: true,
        bedroom: 1,
        bathroom: 1,
        kitchen: true,
        priceRange: [{
            lowest: 800,
            highest: 1000
        }],
        date: [{
            start: '05/15/2023',
            end : '09/15/2023'
        }],
        location: 'University of New Jersey',
        note: ''
      },
      {
        userName: 'roconnor',
        post: false,
        lookFor: false,
        shareRoom: true,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 1000,
            highest: 11000
        }],
        date: [{
            start: '05/15/2023',
            end : '07/15/2023'
        }],
        location: 'Brown University',
        note: ''
      }, {
        userName: 'msumer',
        post: true,
        lookFor: false,
        shareRoom: true,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 600,
            highest: 800
        }],
        date: [{
            start: '05/01/2023',
            end : '07/15/2023'
        }],
        location: 'University of Connecticut',
        note: ''
      }, {
        userName: 'sjoseph',
        post: false,
        lookFor: false,
        shareRoom: false,
        bedroom: 1,
        bathroom: 1,
        kitchen: false,
        priceRange: [{
            lowest: 900,
            highest: 12000
        }],
        date: [{
            start: '05/15/2023',
            end : '07/15/2023'
        }],
        location: 'MIT',
        note: ''
      }
    ]
    module.exports = Apartments

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