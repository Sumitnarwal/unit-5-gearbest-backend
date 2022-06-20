const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
  
  }
);

module.exports = mongoose.model("superDeal", userSchema);