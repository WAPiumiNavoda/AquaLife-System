const mongoose = require('mongoose');

const supportInnovationSchema = mongoose.Schema(
  {
    suppotorName : {
      type: String,
    },
    suppotorEmail: {
      type: String,
    },
    supportorPhone: {
      type: Number,
    },
    price:{
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const SupportInnovation = mongoose.model("SupportInnovation", supportInnovationSchema);

module.exports = SupportInnovation;