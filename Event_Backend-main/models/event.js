const mongoose1 = require('mongoose');
let Event = mongoose1.model('Event', {

    event_name: { type: String },
    event_date: { type: Date },
    event_time: { type: String },
    organiser: { type: String },
    features: { type: Array }
});

module.exports = { Event };