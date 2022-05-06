const express=require("express");
const cors=require("cors");
const  connect  = require("./configs/db");
const app=express();
app.use(express.json())
app.use(cors());
const allController=require("./controller/allpro.controllers")
const kitchenController=require("./controller/kitchen.contro")
const laptopController=require("./controller/laptop.contro")
const mobileController=require("./controller/mobile.con")
const outdoorController=require("./controller/outdoor.contr")
const scienceController=require("./controller/science.controll")
const userController=require("./controller/collectionController")
const addtoCartController=require("./controller/adToCartController")
const superDealController=require("./controller/superDealContro")



app.use("/superDeal",superDealController)
app.use("/addtocart",addtoCartController)
app.use("/collection",userController)
app.use("/all",allController)
app.use("/kitchen",kitchenController)
app.use("/laptop",laptopController)
app.use("/outdoor",outdoorController)
app.use("/science",scienceController)
app.use("/mobile",mobileController)





app.listen(7005,async ()=>{
    try{
        await connect();
        console.log("listing on port 7005")
    }catch(err){
        console.log(err.message);
    }
   
})