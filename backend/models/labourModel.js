const mongoose = require("mongoose");

const labourSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
   
    date: {
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

const Labour = mongoose.model("Labour", labourSchema);

module.exports = Labour;