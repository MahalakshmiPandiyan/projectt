var express = require('express');
var {getValues,getValuesById,checking,postValues} = require('../controllers/loginControllers');
const loginController=require('../controllers/loginControllers')
const loginRouter = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');

loginRouter.get('/',loginController.getValues);
loginRouter.get('/:email',loginController.getValuesById);
loginRouter.get('/:email/:passwordVaule',loginController.checking);
loginRouter.post('', loginController.postValues);

module.exports = loginRouter;