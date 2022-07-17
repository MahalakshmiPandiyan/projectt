const express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var ObjectId = require('mongoose').Types.ObjectId;
var { Login } = require('../models/login');

class loginController {
    static getValues = async (req, res) => {
        try {
            Login.find((err, docs) => {
                if (!err) { res.send(docs); }
            });
        }

        catch (err) {
            return res.status(404).send("error in get Details ")
        }

    };

    static getValuesById = async (req, res) => {
        try {
            Login.find({ email: req.params.email }, (err, doc) => {
                if (!err) {
                    console.log(doc[0].role);
                    res.status(200).json({ role: doc[0].role })
                }
            });
        }

        catch (err) {
            return res.status(404).send("error in get Details ")
        }

    };

    static checking = async (req, res) => {
        try {
            Login.find({ email: req.params.email }, { email: 1, password: 1, _id: 0 }, (err, doc) => {
                if (doc[0].email === req.params.email && doc[0].password === req.params.passwordVaule) {
                    let payload = { subject: doc._id };
                    let token = jwt.sign(payload, process.env.ACCESS_TOKEN);
                    res.status(200).send({ token, message: 'true' });
                }
            });
        }

        catch {
            res.status(404).json({
                message: 'Incorret Username or Password'
            })
        }
    };


    static postValues = (req, res) => {
        var login = new Login({

            nameValue: req.body.nameValue,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone
        });
        try {
            login.save((err, doc) => {
                if (!err) {
                    res.status(200).send({ message: 'Successfully Registered' });
                }
            });
        }

        catch (err) {
            res.status(404).json({ message: 'Error in Registration' });
        }

    };

}


module.exports = loginController;