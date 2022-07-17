const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { isAuthenticatedUser } = require('../middleware/auth');
const { Feature } = require('../models/feature');

class featureController {


static getAllFeature = async (req, res) => {
    try {

        await Feature.find((err, docs) => {
            res.status(200).send(docs)
        });
    }
    catch (err) {
        return res.status(400).send("error in get feature ")
    }
};



static getFeatureById = async (req, res) => {

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id `);
    try {
        Feature.findById(req.params.id, (err, doc) => {
            res.status(200).send(doc)
        });
    }
    catch (err) {
        return res.status(400).send("error in get by Id in Features ")
    }
};

static postFeature = async (req, res) => {
    var feature = new Feature({
        name: req.body.name,
        amount: req.body.amount
    });
    try {

        feature.save((err, doc) => {
            res.status(200).send({ doc, message: 'Successfully Added New Features!!!!!!!!' })
        });

    }
    catch (err) {
        return res.status(400).send("error in post Features ")
    }
};

static putFeature = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    var event = {
        name: req.body.name,
        amount: req.body.amount
    };
    try {
        Feature.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
            res.status(200).send({ doc, message: 'Features are Successfully Updated!!!!!!!!' })
        });

    }
    catch (err) {
        return res.status(400).send("error in put Features ")
    }
};


static deleteFeature = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);
    try {

        Feature.findByIdAndRemove(req.params.id, (err, data) => {
            res.status(200).send(data)
        });
    }
    catch (err) {
        return res.status(400).send("error in delete Features ")
    }

};
}
module.exports = featureController;
