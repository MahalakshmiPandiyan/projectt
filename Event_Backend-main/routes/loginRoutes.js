let express = require('express');
const loginController = require('../controllers/loginControllers')
const loginRouter = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');

loginRouter.get('/', loginController.getValues);
loginRouter.get('/:email', loginController.getValuesById);
loginRouter.get('/:email/:passwordVaule', loginController.checking);
loginRouter.post('', loginController.postValues);

module.exports = loginRouter;