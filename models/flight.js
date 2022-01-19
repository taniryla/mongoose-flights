const mongoose = require('mongoose');

const Schema = mongoose.Schema

// subdocument schema
const destinationSchema = new Schema ({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: Date,
})

// document schema
const flightSchema = new Schema ({
    airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
    },
    airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
    },
    flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
    },
    departure: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() +1))
    }, 
    destinations: [destinationSchema]
    });
    

module.exports = mongoose.model('Flight', flightSchema);