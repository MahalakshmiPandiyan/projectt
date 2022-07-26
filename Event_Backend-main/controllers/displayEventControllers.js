const express = require('express');
const router = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const { DisplayEvent } = require('../models/displayEvent');
const ObjectId = require('mongoose').Types.ObjectId;

class displayEventController {


    static getAllDisplayEvent =  (req, res) => {

        DisplayEvent.find((err, docs) => {
            if (!err) {
                res.status(200).send(docs)
            }
            else {
                return res.status(404).send("error in get display ")
            }
        });
    };

    static getDisplayEventById =  (req, res) => {

        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id `);

        DisplayEvent.findById(req.params.id, (err, doc) => {
            if (!err) {
                res.status(200).send(doc)
            }
            else {
                return res.status(404).send("error in get by Id in Details ")
            }
        });


    };
    static postDisplayEvent =  (req, res) => {
        let displayEvent = new DisplayEvent({
            feature: req.body.feature,
            details: req.body.details
        });
        displayEvent.save((err, doc) => {
            if (!err) {
                res.status(200).send({ doc, message: 'Successfully Added New Details!!!!!!!!' })
            }
            else {
                return res.status(404).send("error in post Details ")
            }
        });
    };

    static putDisplayEvent =  (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id :`);
        let displayEvent = {
            feature: req.body.feature,
            details: req.body.details
        };
        DisplayEvent.findByIdAndUpdate(req.params.id, { $set: displayEvent }, { new: true }, (err, doc) => {
            if (!err) {
                res.status(200).send({ doc, message: 'Features are Successfully Details!!!!!!!!' })
            }
            else {
                return res.status(404).send("error in put Details ")
            }
        });
    };

    static deleteDisplayEvent =  (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with the given id : $(req.params.id)`);

        DisplayEvent.findByIdAndRemove(req.params.id, (err, data) => {
            if (!err) {
                res.status(200).send(data)
            }
            else {
                return res.status(404).send("error in delete Details ")
            }
        });
    };
}


module.exports = displayEventController;