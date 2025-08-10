const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true, 
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  image:
    {
      type: String, 
    },
}, { timestamps: true }); 

const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;
