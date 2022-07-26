const express = require('express');
const displayEventRouter = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const displayEventController = require('../controllers/displayEventControllers')


displayEventRouter.get("/", displayEventController.getAllDisplayEvent);
displayEventRouter.get("/:id", displayEventController.getDisplayEventById);
displayEventRouter.post("/", isAuthenticatedUser,displayEventController.postDisplayEvent);
displayEventRouter.put("/:id", isAuthenticatedUser,displayEventController.putDisplayEvent);
displayEventRouter.delete("/:id",isAuthenticatedUser, displayEventController.deleteDisplayEvent);


module.exports = displayEventRouter;