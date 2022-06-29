const mongoose=require('mongoose');

const Employee = mongoose.model('Employee',{
    nameValue:{type:String},
    password:{type:String},
    role:{type:String},
    email:{type:String},
    phone:{type:String}
});

module.exports={Employee};