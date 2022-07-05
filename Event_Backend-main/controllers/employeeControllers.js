const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Employee}= require('../models/employee');


router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:email',(req,res)=>{
    console.log(req.params.email);
    Employee.find({email:req.params.email},(err,doc)=>{
        if(!err){
            console.log(doc[0].role);
            res.status(200).json({role:doc[0].role})}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});


router.get('/:email/:passwordVaule',(req,res)=>{
    Employee.find({email:req.params.email},{email:1,password:1,_id:0},(err,doc)=>{
        if(doc[0].email===req.params.email && doc[0].password===req.params.passwordVaule){
            res.send("true");
        }
        else{
            res.status(401).json({
                message: 'Incorret Username or Password'
            })

            // return false;
        }
    })
})


router.post('',(req,res)=>{
    // console.log(emailId);
    var emp=new Employee({

        nameValue:req.body.nameValue,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone
    });
    emp.save((err,doc)=>{
        if(!err){
            res.status(200).send({doc,message:'Successfully Registered'})
        }
        else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    });
});

// router.put('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
//     var emp=new Employee({
//         name:req.body.name,
//         password:req.body.password,
//         role:req.body.role
//     });  
//     Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
//     });
// });

// router.delete('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
//     Employee.findByIdAndUpdate(req.params.id,(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{console.log('error in delete : '+ JSON.stringify(err,undefined,2));}
//     });
// });

module.exports=router;