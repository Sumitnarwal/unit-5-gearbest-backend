

const express = require("express");
const User = require("../models/mobile.model");
const router = express.Router();



router.get("", async (req, res) => {
    try {
    //   const page=req.query.page
    //   const pagesize=req.query.size || 55
    //   const skip=(page-1)*pagesize

      const user = await User.find().lean().exec();
        return res.send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
  
      if (user) {
        return res.send(user);
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
module.exports = router;