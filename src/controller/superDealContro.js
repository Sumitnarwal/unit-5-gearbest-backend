const express = require("express");
const User = require("../models/superDeals");
const router = express.Router();
const path=require("path");


router.get("", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.send(users);
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});
router.post("", async (req, res) => {
    
    try {
        const users = await User.create(req.body);
        return res.send(users);
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});
 

module.exports = router;