const express = require("express")

const app = require("./index");

const connect = require("./config/db");

const userController = require("./controllers/user.controller")

app.use(express.json())

app.use("/users",userController)

app.listen(2222,async (req,res)=>{
   try{
    await connect();
    console.log("listening on port 2222");
   }catch(err){
       console.log(err)
   }
});