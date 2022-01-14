const express = require("express");

const router = express.Router();

const User = require("../modules/user.model");

const {body , validationResult} = require("express-validator");
const res = require("express/lib/response");

router.get("",async (req,res)=>{
    try{
        const users = await User.find().lean().exec();
       return  res.status(200).send(users);
    }catch(err){
       return  res.status(500).json({message: err.message,status:"Failed"});
    }
})


router.post("",async (req,res)=>{
    try{
       const user = await User.create(req.body);
       return   res.status(201).send(user);
    }catch(err){
        return res.status(500).json({message: err.message,status:"Failed"});
    }
})
    router.delete("/:id", async(req,res)=>{
        try{
        const user = await User.findByIdAndDelete(req.params.id);
       return  res.status(202).send(user)

        }catch(err){
           return res.status(500).json({message: err.message,status:"Failed"})
        }
        
})


module.exports = router;