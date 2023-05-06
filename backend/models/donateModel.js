const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
   
    cvc: {
        type: String,
        required: true,
      },

    donatePrice:{
        type: String,
        required: true,
    },
    
    cardName: {
        type: String,
        required: true,
      },

    country: {
        type: String,
        required: true,
      },



  },
  { timestamps: true }
);

const Donate = mongoose.model("Donate", donateSchema);

module.exports = Donate;