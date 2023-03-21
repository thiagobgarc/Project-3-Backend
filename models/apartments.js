const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApartmentSchema = new mongoose.Schema({
    userName: String,
    post: Boolean,
    lookFor: Boolean,
    location: String,
    housingType: String,
    roomType: String,
    bathroomType: String,
    kitchen: Boolean,
    age: Number,
    priceRange: [ Number, Number],
    date: [Date, Date],
    image: String,
    note: String
  }, { timestamps: true })

const Apartment = mongoose.model("Apartment", ApartmentSchema)

//Make this exportable to be accessed in server.js
module.exports = Apartment