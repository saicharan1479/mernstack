const express = require('express');
const app = express();

var dbobj = require('./db');


var router = express.Router();

router.get('/getapi' , (req,res)=>{
    res.send('user get api');
})


router.post('/ins' , (req,res)=>{
    
    dbobj.insuser(req.body);
    res.json({'status':'form submitted'});
})


module.exports = router;
