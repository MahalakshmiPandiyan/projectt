var express = require('express');
var {getAllFeature,postFeature,putFeature,getFeatureById,deleteFeature} = require('../controllers/featureController');
const featureRouter = express.Router();

featureRouter.get("/",getAllFeature);
featureRouter.get('/:id',getFeatureById);
featureRouter.post('/',postFeature);
featureRouter.put('/:id',putFeature)
featureRouter.delete('/:id',deleteFeature);


module.exports = featureRouter;