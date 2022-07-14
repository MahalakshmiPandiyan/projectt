const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Event } = require('../models/event');
class eventController {

static getAllEvent = async (req, res) => {
    try {
        Event.find((err, doc) => {
            res.status(200).send(doc)
        });
    }
    catch (err) {
        return res.status(400).send("error in get event ")
    }

}

static getEventById = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id `);
    const event = Event.findById(req.params.id, (err, doc) => {
        if (!event) { res.status(400).json({ message: "error in get by id event " }) }
        else { res.send(doc); }
    }); 
};

static postEvent = async (req, res) => {
    var event = new Event({
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        event_time: req.body.event_time,
        photography: req.body.photography,
        food: req.body.food,
        decoration: req.body.decoration,
        organiser: "unassigned"
        // decoration:req.body.role,
    });
    event.save((err, doc) => {
        if (!err) {
            res.status(200).send({ doc, message: 'Successfully Registered Your Event' })
        }
        else { res.status(400).statusText("error in post put event ") }
    });
};


static putEvent = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    console.log(req.params.id)
    var event = {
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        event_time: req.body.event_time,
        photography: req.body.photography,
        food: req.body.food,
        decoration: req.body.decoration,
        organiser: req.body.organiser
    };
    console.log("event", event);
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.status(200).send({ doc, message: 'Successfully Updated ' })
        }
        else { res.status(400).statusText("error in save put event ") }
    });
};
}
module.exports = eventController