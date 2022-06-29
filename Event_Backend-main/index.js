const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const {mongoose}=require('./db.js');
var employeeController= require('./controllers/employeeControllers.js');
var eventRouting=require('./routes/eventRoutes');
var FeatureRouting=require('./routes/featureRoutes')

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));


app.use('/employees',employeeController);
app.use('/event',eventRouting);
app.use('/feature',FeatureRouting);

app.listen(3000,()=>console.log('Server started at port : 3000'));
