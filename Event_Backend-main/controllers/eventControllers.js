const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


const { Event } = require('../models/event');
class eventController {

    static getAllEvent = (req, res) => {
        try {
            Event.find((err, doc) => {
                res.status(200).send(doc)
            });
        }
        catch (err) {
            return res.status(404).send("error in get event ")
        }

    }

    static getEventById = (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id `);
        try {
            Event.findById(req.params.id, (err, doc) => {
                res.status(200).send(doc)
            });
        }
        catch (err) {
            return res.status(404).send("error in get by Id in Features ")
        }
    };

    static postEvent = async (req, res) => {
        var event = new Event({
            event_name: req.body.event_name,
            event_date: req.body.event_date,
            event_time: req.body.event_time,
            features: req.body.features,
            organiser: "unassigned"
        });

        try {
            event.save((err, doc) => {
                if (!err) {
                    res.status(200).send({ doc, message: 'Successfully Registered Your Event!!!!!!!!' })
                }
            });
        }

        catch (err) { res.status(404).status("error in post put event ") }
    };


    static putEvent = (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id :`);
        console.log(req.params.id)
        let event = {
            event_name: req.body.event_name,
            event_date: req.body.event_date,
            event_time: req.body.event_time,
            organiser: req.body.organiser,
            features: req.body.features
        };
        console.log("event", event);
        try {
            Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
                res.status(200).send({ doc, message: 'Successfully Updated ' });
            })

        }
        catch (err) { res.status(404).statusText("error in save put event ") };

    };
}
module.exports = eventController