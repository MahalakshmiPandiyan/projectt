const express = require('express');
var router = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const { DisplayEvent } = require('../models/displayEvent');
var ObjectId = require('mongoose').Types.ObjectId;

class displayEventController {


static getAllDisplayEvent = async (req, res) => {
    try {

        DisplayEvent.find((err, docs) => {
            res.status(200).send(docs)
        });
    }
    catch (err) {
        return res.status(400).send("error in get display ")
    }
};

static getDisplayEventById = async (req, res) => {

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id `);
    try {
        DisplayEvent.findById(req.params.id, (err, doc) => {
            res.status(200).send(doc)
        });
    }
    catch (err) {
        return res.status(400).send("error in get by Id in Features ")
    }
};
static postDisplayEvent= async (req, res) => {
    var displayEvent = new DisplayEvent({
        feature: req.body.feature,
        details: req.body.details
    });
    try {

        displayEvent.save((err, doc) => {
            res.status(200).send({ doc, message: 'Successfully Added New Features!!!!!!!!' })
        });

    }
    // else { res.status(400).statusText("error in post features ") }
    catch (err) {
        return res.status(400).send("error in post Features ")
    }
};
static putDisplayEvent = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    var displayEvent = {
        name: req.body.name,
        amount: req.body.amount
    };
    try {
        DisplayEvent.findByIdAndUpdate(req.params.id, { $set: displayEvent }, { new: true }, (err, doc) => {
            res.status(200).send({ doc, message: 'Features are Successfully Updated!!!!!!!!' })
        });

    }
    // else { res.status(400).statusText("error in  put features ") }
    catch (err) {
        return res.status(400).send("error in put Features ")
    }
};
static deleteDisplayEvent = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);
    try {
        DisplayEvent.findByIdAndRemove(req.params.id, (err, data) => {
            res.status(200).send(data)
        });
    }
    catch (err) {
        return res.status(400).send("error in delete Features ")
    }
};
}


module.exports = displayEventController;