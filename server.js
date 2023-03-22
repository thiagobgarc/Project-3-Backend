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
//import mongoose/connection
const mongoose = require("mongoose")
const db = mongoose.connection
// import middleware
const cors = require("cors")
const morgan = require("morgan")
// IMPORT BCYRPT/EXPRESS-SESSION
const bcrypt = require('bcrypt')
const session = require('express-session')

//import models
const Apartment = require('./models/apartments.js')
const Roommate = require('./models/roommates.js')
const User = require('./models/users')

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
//In .env add this to run mongodb locally
// DATABASE_URL = 'mongodb://localhost:27017/roomiefinderz'

db.on("open", () => console.log("Youre connected to mongoose" + DATABASE_URL))
db.on("close", () => console.log("You are disconnected", + DATABASE_URL))
db.on("error", (error) => console.log(error))

///////////////////////////////
// SESSIONS TO .ENV FILE
///////////////////////////////
app.use(session({
  secret:process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

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
// BCRYPT
////////////////////////////////
const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))
console.log(hashedString)
console.log(bcrypt.compareSync('yourStringHere', hashedString))
////////////////////////////////

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req,res) => {
    res.send("hello world!")
})

//////////////////////////////////////
// LOGIN & SIGNUP ROUTES
//////////////////////////////////////
app.get("/login", async (req,res) => {
  try{
    // GET LOGIN PAGE
    res.json(await User.find({}))
  } catch (error) {
    // SEND ERROR
    res.status(400).json(error)
  }
})
app.get("/login/:id", async (req,res) => {
  try {
    // LOGIN USER 
    res.json(await User.findById(req.params.id))
  } catch (error) {
    // send error
    res.status(400).json(error)
  }
})

app.post("/registration", async (req,res) => {
  // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  try{
    // CREATE USER
    res.json(await User.create(req.body))
  } catch (error){
    // SEND ERROR
    res.status(400).json(error)
  }
})
//////////////////////////////////////
//////////////////////////////////////

// GET - A LIST OF ALL AVAILABLE APARTMENTS
app.get('/postapps', async(req, res) =>{
  try{
    // CREATE USER
    res.json(await User.create(req.body))
  } catch {
    // SEND ERROR
    res.status(400).json(error)
  }
})
//////////////////////////////////
// ALL ROUTES FOR FINDING A ROOM
/////////////////////////////////

// GET - A LIST OF ALL AVAILABLE APARTMENTS
app.get('/postapts', async(req, res) =>{
  try{
    res.json(await Apartment.find({post:true}))
  }catch {
    // send error
    res.status(400).json(error)
  }
})
// GET - APARTMENT SHOW
app.get('/apartment/:id', async (req, res) => {
  try {
    res.json(await Apartment.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})
//////////////////////////////////
// ALL ROUTES FOR POSTING A ROOM
/////////////////////////////////
// GET - A LIST OF ALL WANTED APARTMENTS
app.get('/requestapts', async(req, res) =>{
  try{
    res.json(await Apartment.find({post:false}))
  }catch {
    // send error
    res.status(400).json(error)
  }
})
// POST - APARTMENT CREATE ROUTE
app.post('/requestapts', async (req, res) => {
  try {
    res.json(await Apartment.create(req.body))
  } catch (error){
    // send error
    res.status(400).json(error)
  }
})
// PUT - APARTMENT UPDATE ROUTE
app.put("/requestapts/:id", async (req, res) => {
  try {
    res.json(await Apartment.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    res.status(400).json(error)
  }
})
// DELETE - APARTMENT DELETE ROUTE
app.delete('/requestapts/:id', async (req, res) => {
  try {
    res.json(await Apartment.findByIdAndRemove(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})
//////////////////////////////////////
// ALL ROUTES FOR ROOMMATES
//////////////////////////////////////
//GET - A LIST OF ALL ROOMMATES 
app.get('/roommate', async(req, res) =>{
  try{
    res.json(await Roommate.find({}))
  }catch {
    // send error
    res.status(400).json(error)
  }
})
// GET - ROOMMATE SHOW
app.get('/roommate/:id', async (req, res) => {
  try {
    res.json(await Roommate.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})
// PUT - ROOMMATE UPDATE ROUTE
app.put("/roommate/:id", async (req, res) => {
  try {
    res.json(await Roommate.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    res.status(400).json(error)
  }
})
// DELETE - ROOMMATE DELETE ROUTE
app.delete('/roommate/:id', async (req, res) => {
  try {
    res.json(await Roommate.findByIdAndRemove(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})
///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))