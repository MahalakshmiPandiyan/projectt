var express = require('express');
var {getAllEvent,getEventById,postEvent,putEvent} = require('../controllers/eventControllers');
const eventRouter = express.Router();

eventRouter.get("/",getAllEvent);
eventRouter.get('/:id',getEventById);
eventRouter.post('/',postEvent);
eventRouter.put('/:id',putEvent)

module.exports = eventRouter;