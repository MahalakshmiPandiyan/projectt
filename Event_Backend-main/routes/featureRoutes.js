const express = require('express');
const featureRouter = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const featureController = require('../controllers/featureController')


featureRouter.get("/", featureController.getAllFeature);
featureRouter.get('/:id', isAuthenticatedUser, featureController.getFeatureById);
featureRouter.post('/', isAuthenticatedUser, featureController.postFeature);
featureRouter.put('/:id', isAuthenticatedUser, featureController.putFeature)
featureRouter.delete('/:id', isAuthenticatedUser, featureController.deleteFeature);


module.exports = featureRouter;