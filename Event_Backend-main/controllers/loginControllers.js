const express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var ObjectId = require('mongoose').Types.ObjectId;
var { Login } = require('../models/login');

class loginController {
    static getValues = async (req, res) => {
        Login.find((err, docs) => {
            if (!err) { res.send(docs); }
            else { console.log('error in retriving : ' + JSON.stringify(err, undefined, 2)); }
        });
    };

    static getValuesById = async (req, res) => {
        console.log(req.params.email);
        Login.find({ email: req.params.email }, (err, doc) => {
            if (!err) {
                console.log(doc[0].role);
                res.status(200).json({ role: doc[0].role })
            }
            else { console.log('Error in retriving : ' + JSON.stringify(err, undefined, 2)); }
        });
    };

    static checking = async (req, res) => {
        Login.find({ email: req.params.email }, { email: 1, password: 1, _id: 0 }, (err, doc) => {
            if (doc[0].email === req.params.email && doc[0].password === req.params.passwordVaule) {
                let payload = { subject: doc._id };
                let token = jwt.sign(payload, process.env.ACCESS_TOKEN);
                res.status(200).send({ token, message: 'true' });

                // res.send("true");
            }
            else {
                res.status(401).json({
                    message: 'Incorret Username or Password'
                })
            }
        })
    };


    static postValues = (req, res) => {
        var log = new Login({

            nameValue: req.body.nameValue,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone
        });
        log.save((err, doc) => {
            if (!err) {
                res.status(200).send({ message: 'Successfully Registered' });
            }
            else {
                res.status(401).json({
                    message: 'Error in Registration'
                })
            }
        });
    };

    // router.put('/:id',(req,res)=>{
    //     if(!ObjectId.isValid(req.params.id))
    //         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    //     var log=new Login({
    //         name:req.body.name,
    //         password:req.body.password,
    //         role:req.body.role
    //     });  
    //     Login.findByIdAndUpdate(req.params.id,{$set:log},{new:true},(err,doc)=>{
    //         if(!err){res.send(doc);}
    //         else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    //     });
    // });

    // router.delete('/:id',(req,res)=>{
    //     if(!ObjectId.isValid(req.params.id))
    //         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    //     Login.findByIdAndUpdate(req.params.id,(err,doc)=>{
    //         if(!err){res.send(doc);}
    //         else{console.log('error in delete : '+ JSON.stringify(err,undefined,2));}
    //     });
    // });


}


module.exports = loginController;