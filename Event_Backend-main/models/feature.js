const mongoose2 = require('mongoose');
let Feature = mongoose2.model('Feature', {

    name: { type: String },
    amount: { type: String }

});

module.exports = { Feature };