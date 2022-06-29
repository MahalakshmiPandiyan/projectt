const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Feature}= require('../models/feature');

const getAllFeature = async (req,res)=>{
    Feature.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};

const getFeatureById=async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id `);
    Feature.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};

const postFeature= async (req,res)=>{
    var feature=new Feature({
        name:req.body.name,
        amount:req.body.amount
    });
    feature.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save post event: '+ JSON.stringify(err,undefined,2));}
    });
};

const putFeature= async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    console.log(req.params.id)
    var event={
        name:req.body.name,
        amount:req.body.amount
    };  
    console.log("event",event);
    Feature.findByIdAndUpdate(req.params.id,{$set:event},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save put event : '+ JSON.stringify(err,undefined,2));}
    });
};


deleteFeature= async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);

        Feature.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err)
            res.send(data);
        else
            console.log('Error in Deleting Data : '+JSON.stringify(err,undefined,2));
    });
};

module.exports={
    getAllFeature:getAllFeature,
    postFeature:postFeature,
    putFeature:putFeature,
    getFeatureById:getFeatureById,
    deleteFeature:deleteFeature
};
