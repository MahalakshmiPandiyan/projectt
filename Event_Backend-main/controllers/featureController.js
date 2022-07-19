const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { isAuthenticatedUser } = require('../middleware/auth');
const { Feature } = require('../models/feature');

class featureController {


    static getAllFeature = (req, res) => {
        Feature.find((err, docs) => {
            if (!err) {
                res.status(200).send(docs)

            }
            else {
                return res.status(404).send("error in get feature ")
            }
        });
    };



    static getFeatureById = (req, res) => {

        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id `);
        Feature.findById(req.params.id, (err, doc) => {
            if (!err) {
                res.status(200).send(doc)
            }
            else {
                return res.status(404).send("error in get by Id in Features ")
            }
        });


    };

    static postFeature = (req, res) => {
        const feature = new Feature({
            name: req.body.name,
            amount: req.body.amount
        });
        feature.save((err, doc) => {
            if (!err) {
                res.status(200).send({ doc, message: 'Successfully Added New Features!!!!!!!!' })
            }
            else {
                return res.status(404).send("error in post Features ")
            }
        });


    };

    static putFeature = (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with given id :`);
        const event = {
            name: req.body.name,
            amount: req.body.amount
        };
        Feature.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
            if (!err) {
                res.status(200).send({ doc, message: 'Features are Successfully Updated!!!!!!!!' })
            }
            else {
                return res.status(404).send("error in put Features ")
            }
        });
    };


    static deleteFeature = (req, res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(404).send(`No record with the given id : $(req.params.id)`);

        Feature.findByIdAndRemove(req.params.id, (err, data) => {
            if (!err) {
                res.status(200).send(data)
            }
            else {
                return res.status(404).send("error in delete Features ")
            }
        });
    };
}
module.exports = featureController;
