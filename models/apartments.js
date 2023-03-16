const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

//Make this exportable to be accessed in server.js
module.exports = Apartment