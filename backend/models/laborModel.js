const mongoose = require("mongoose");

const laborSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    availableDate: {
      type: String,
      required: true,
    },
    country: {
        type: String,
        required: true,
      },
    phone:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Labor = mongoose.model("Labor", laborSchema);

module.exports = Labor;