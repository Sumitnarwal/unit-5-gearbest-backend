
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

//module.exports = mongoose.model("collection", userSchema); // user => users
//module.exports = mongoose.model("kitchenpro", userSchema); // user => users
//module.exports = mongoose.model("laptoppro", userSchema); // user => users
//module.exports = mongoose.model("mobilepro", userSchema); // user => users
//module.exports = mongoose.model("outdoorspro", userSchema); // user => users
//module.exports = mongoose.model("scipro", userSchema); // user => users
//module.exports = mongoose.model("allpro", userSchema); // user => users
