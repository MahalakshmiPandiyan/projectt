var express = require('express');
const displayEventRouter = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const displayEventController=require('../controllers/displayEventControllers')


displayEventRouter.get("/",displayEventController.getAllDisplayEvent);
displayEventRouter.get("/:id",displayEventController.getDisplayEventById);
displayEventRouter.post("/",displayEventController.postDisplayEvent);
displayEventRouter.put("/:id",displayEventController.putDisplayEvent);
displayEventRouter.delete("/:id",displayEventController.deleteDisplayEvent);


module.exports = displayEventRouter;