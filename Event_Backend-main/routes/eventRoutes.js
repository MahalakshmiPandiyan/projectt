const express = require('express');
const {getAllEvent,getEventById,postEvent,putEvent} = require('../controllers/eventControllers');
const eventRouter = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const eventController=require('../controllers/eventControllers')


eventRouter.get("/",eventController.getAllEvent);
eventRouter.get('/:id',eventController.getEventById);
eventRouter.post('/',isAuthenticatedUser,eventController.postEvent);
eventRouter.put('/:id',isAuthenticatedUser,eventController.putEvent)

module.exports = eventRouter;