const mongoose=require('mongoose');
var DisplayEvent = mongoose.model('DisplayEvent',{
    feature:{type:String},
    details:{type:String}
});
module.exports={DisplayEvent};
