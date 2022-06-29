const mongoose2=require('mongoose');
var Feature = mongoose2.model('Feature',{
    
    name:{type:String},
    amount:{type:String}

});

module.exports={Feature};