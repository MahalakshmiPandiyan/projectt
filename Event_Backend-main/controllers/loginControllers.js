const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId;
const { Login } = require('../models/login');
var bcrypt = require('bcryptjs');

class loginController {
    static getValues = (req, res) => {
        Login.find((err, docs) => {
            if (!err) {
                res.send(docs);
            }
            else {
                res.status(404).send("error in get Details ")
            }
        });
    };

    static getValuesById = (req, res) => {
        Login.find({ email: req.params.email }, (err, doc) => {
            if (!err) {
                console.log(doc[0].role);
                res.status(200).json({ role: doc[0].role })
            }
            else {
                return res.status(404).send("error in get Details ")
            }
        });

    };

    static checking = (req, res) => {

        Login.find({ email: req.params.email }, { email: 1, password: 1, _id: 0 }, (err, doc) => {
            const isPasswordCorrect = bcrypt.compareSync(req.params.passwordVaule, doc[0].password);
            if (doc[0].email === req.params.email && isPasswordCorrect === true) {
                let payload = { subject: doc._id };
                let token = jwt.sign(payload, process.env.ACCESS_TOKEN);
                res.status(200).send({ token, message: 'true' });
            }
            else {
                res.status(404).send({ message: "Incorret Username or Password" });
            }
        });
    };


    static postValues = (req, res) => {

        const existingUser = Login.findOne({ email: req.body.email }, (err, doc) => {
            if (!existingUser) {
                const hashedPassword = bcrypt.hashSync(req.body.password, 12);
                const login = new Login({

                    nameValue: req.body.nameValue,
                    password: hashedPassword,
                    email: req.body.email,
                    phone: req.body.phone
                });

                login.save((err, doc) => {
                    if (!err) {
                        res.status(200).send({ message: 'Successfully Registered' });
                    }
                    else {
                        res.status(404).json({ message: 'Error in Registration' });
                    }
                });
            }
            else{
                res.status(404).json({message:'Already Registerd Please Login!!!!!'})
            }

        });

    };
}


module.exports = loginController;