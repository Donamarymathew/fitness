const express=require('express');
const router=express.Router();
const empService=require('../service/empService');
const empModel=require('../model/employee');
const create = require('../model/dbsetup');
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extend:false}));
router.use(bodyParser.json());


router.get('/setupDb',(req,res,next)=>{
    create.setupDb().then ((data)=>{
   res.send(data) 
    }).catch((err)=>{
        next(err)
    })
})



// get all employee detail
router.get('',(req,res,next)=>{
    empService.getAllEmployees().then((response)=>{
        res.json(response);
    }).catch((err)=>next(err));
    })

    module.exports=router;
    