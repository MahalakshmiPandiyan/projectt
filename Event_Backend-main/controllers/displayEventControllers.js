const express = require('express');
const router = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const { DisplayEvent } = require('../models/displayEvent');
const ObjectId = require('mongoose').Types.ObjectId;

class displayEventController {


    static getAllDisplayEvent = async (req, res) => {
        try {

            DisplayEvent.find((err, docs) => {
                res.status(200).send(docs)
            });
        }
        catch (err) {
            return res.status(404).send("error in get display ")
        }
    };

    static getDisplayEventById = async (req, res) => {

        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id `);
        try {
            DisplayEvent.findById(req.params.id, (err, doc) => {
                res.status(200).send(doc)
            });
        }
        catch (err) {
            return res.status(404).send("error in get by Id in Features ")
        }
    };
    static postDisplayEvent = async (req, res) => {
        let displayEvent = new DisplayEvent({
            feature: req.body.feature,
            details: req.body.details
        });
        try {

            displayEvent.save((err, doc) => {
                res.status(200).send({ doc, message: 'Successfully Added New Features!!!!!!!!' })
            });

        }
        catch (err) {
            return res.status(404).send("error in post Features ")
        }
    };
    static putDisplayEvent = async (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id :`);
        let displayEvent = {
            name: req.body.name,
            amount: req.body.amount
        };
        try {
            DisplayEvent.findByIdAndUpdate(req.params.id, { $set: displayEvent }, { new: true }, (err, doc) => {
                res.status(200).send({ doc, message: 'Features are Successfully Updated!!!!!!!!' })
            });

        }
        catch (err) {
            return res.status(404).send("error in put Features ")
        }
    };
    static deleteDisplayEvent = async (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with the given id : $(req.params.id)`);
        try {
            DisplayEvent.findByIdAndRemove(req.params.id, (err, data) => {
                res.status(200).send(data)
            });
        }
        catch (err) {
            return res.status(404).send("error in delete Features ")
        }
    };
}


module.exports = displayEventController;