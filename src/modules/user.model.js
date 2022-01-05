const mongoose = require(mongoose);

const userSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
    },
    
    {
    vaersionKey:false,
    timestamps: true,

}
);


module.export = mongoose.model("user",userSchema)