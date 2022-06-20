const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();
//const port = process.env.Port ||7005

app.use(express.json())
app.use(cors());
const allController = require("./controller/allpro.controllers")
const kitchenController = require("./controller/kitchen.contro")
const laptopController = require("./controller/laptop.contro")
const mobileController = require("./controller/mobile.con")
const outdoorController = require("./controller/outdoor.contr")
const scienceController = require("./controller/science.controll")
const userController = require("./controller/collectionController")
const addtoCartController = require("./controller/adToCartController")
const superDealController = require("./controller/superDealContro")
const placeorderController = require("./controller/placeorder.controller")
const { login, register } = require("./controller/auth.controller")




app.use("/superDeal", superDealController)
app.use("/addtocart", addtoCartController)
app.use("/collection", userController)
app.use("/all", allController)
app.use("/kitchen", kitchenController)
app.use("/laptop", laptopController)
app.use("/outdoor", outdoorController)
app.use("/science", scienceController)
app.use("/mobile", mobileController)
app.use("/placeorder", placeorderController)

app.post("/register", register)
app.post("/login", login)



app.listen(process.env.PORT, async () => {
    try {
        await connect();
        console.log("listing on port 7005")
    } catch (err) {
        console.log(err.message);
    }

})