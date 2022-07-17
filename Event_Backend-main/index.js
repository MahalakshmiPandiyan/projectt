const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const { mongoose } = require('./db.js');
var loginRouting = require('./routes/loginRoutes');
var eventRouting = require('./routes/eventRoutes');
var featureRouting = require('./routes/featureRoutes')
var displayEventRouting = require('./routes/displayEventRoutes');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/employees', loginRouting);
app.use('/event', eventRouting);
app.use('/feature', featureRouting);
app.use('/displayEvent', displayEventRouting);


app.listen(3000, () => console.log('Server started at port : 3000'));

// var api=require('../Event_Backend-main/routes/api');
// app.use('/api',api);