const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Feature } = require('../models/feature');

const getAllFeature = async (req, res) => {
    try {

        Feature.find((err, docs) => {
            res.status(200).send(docs)
        });
    }
    // else{res.status(400).statusText("error in get feature ")}
    catch (err) {
        return res.status(400).send("error in get feature ")
    }
};

//get 200 
//post 200
//put 201
//delete 204

const getFeatureById = async (req, res) => {

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id `);
    try {
        Feature.findById(req.params.id, (err, doc) => {
            res.status(200).send(doc)
        });
    }
    // else { res.status(400).send("error in get by Id in Features ") }
    catch (err) {
        return res.status(400).send("error in get by Id in Features ")
    }
};

const postFeature = async (req, res) => {
    var feature = new Feature({
        name: req.body.name,
        amount: req.body.amount
    });
    try {

        feature.save((err, doc) => {
            res.status(200).send(doc)
        });

    }
    // else { res.status(400).statusText("error in post features ") }
    catch (err) {
        return res.status(400).send("error in post Features ")
    }
};

const putFeature = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    var event = {
        name: req.body.name,
        amount: req.body.amount
    };
    try {
        Feature.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
            res.status(200).send(doc)
        });

    }
    // else { res.status(400).statusText("error in  put features ") }
    catch (err) {
        return res.status(400).send("error in put Features ")
    }
};


deleteFeature = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);

    try {

        Feature.findByIdAndRemove(req.params.id, (err, data) => {
            res.status(200).send(data)
        });

    }
    // else { res.status(400).statusText("error in delete features ") }
    catch (err) {
        return res.status(400).send("error in delete Features ")
    }

};

module.exports = {
    getAllFeature: getAllFeature,
    postFeature: postFeature,
    putFeature: putFeature,
    getFeatureById: getFeatureById,
    deleteFeature: deleteFeature
};
