const mongoose=require('mongoose');
let DisplayEvent = mongoose.model('DisplayEvent',{
    feature:{type:String},
    details:{type:String}
});
module.exports={DisplayEvent};
