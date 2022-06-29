const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Event}= require('../models/event');

const getAllEvent = async (req,res)=>{
    Event.find((err,docs)=>{
        console.log(docs);
        if(!err){res.send(docs);}
        else{console.log('error in retriving data from event : '+JSON.stringify(err,undefined,2));}
    });
}

const getEventById=async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id `);
    Event.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};

const postEvent= async (req,res)=>{
    var event=new Event({
        event_name:req.body.event_name,
        event_date:req.body.event_date,
        event_time:req.body.event_time,
        photography:req.body.photography,
        food:req.body.food,
        decoration:req.body.decoration,
        organiser:"unassigned"
        // decoration:req.body.role,

    });
    event.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save post event: '+ JSON.stringify(err,undefined,2));}
    });
};


const putEvent= async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    console.log(req.params.id)
    var event={
        event_name:req.body.event_name,
        event_date:req.body.event_date,
        event_time:req.body.event_time,
        photography:req.body.photography,
        food:req.body.food,
        decoration:req.body.decoration,
        organiser:req.body.organiser
    };  
    console.log("event",event);
    Event.findByIdAndUpdate(req.params.id,{$set:event},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save put event : '+ JSON.stringify(err,undefined,2));}
    });
};
module.exports={
    getAllEvent:getAllEvent,
    getEventById:getEventById,
    postEvent:postEvent,
    putEvent:putEvent
};