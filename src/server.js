const express = require("express");

const app = express();

module.export =app;

// const app = require("./index");
// const connect = require("./config/db");


app.listen(2222,(req,res)=>{
   try{
   // await connect();
    console.log("listening on port 2222");
   }catch(err){
       console.log(err)
   }
    
   
       

});