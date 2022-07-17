const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MahalakshmiPandiyan:pandiyan23@cluster0.2yjblhv.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log('Mongose connection Succeeded..');
    }
    else {
        console.log('error in db connection : ' + JSON.stringify(err, undefined, 2));
    }
});
module.exports = mongoose;