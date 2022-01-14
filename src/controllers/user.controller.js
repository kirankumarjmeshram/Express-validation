const express = require("express");

const router = express.Router();

const User = require("../modules/user.model");

const {body , validationResult} = require("express-validator");


router.get("",async (req,res)=>{
    try{
        const users = await User.find().lean().exec();
       return  res.status(200).send(users);
    }catch(err){
       return  res.status(500).json({message: err.message,status:"Failed"});
    }
})


router.post("",

    body("first_name").isLength({min:1,max:10}).withMessage("Please Enter Valid name whose length is between 1 to 10"),
    body("last_name").isLength({min:1,max:10}).withMessage("Please Enter Valid name whose length is between 1 to 10"),
    body("email").isEmail().withMessage("Please enter valid Email"),
    body("pincode").isLength({min:6,max:6}).withMessage("pincode  should be exactly 6 numbers"),
    body("age").custom((value)=>{
        if(value<0 || value>100){
            throw new Error("Please enter valid age and it should be between 1 and 100.")
        }
        return true;
    }),
    body("gender").custom((input)=>{
        if(!(input=="male" || "femele"||"other")){
            throw new Error("Please enter proper gender")
        }
        return true
    }),

async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }


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