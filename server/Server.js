//imports
const express = require('express');
const app = express();
const port = 4000;
var cors = require('cors');
var bodyParser = require('body-parser');
var db = require('./db');
var user_r = require('./user-router');


//middlewares
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())
app.use(cors())


//routes
app.get('/', (req,res)=>{
    res.send("<h1>welcome to chaitanya</h1>")
});

app.use('/user' , user_r);


/*app.get('/mongocol', (req,res)=>{
    db.createcol();
    res.send("Database created")
});

app.get('/ins', (req,res)=>{
    db.insuser();
    res.send('inserted')
});*/


//server
app.listen(port , ()=>{
    console.log("server is running on port"+port);
});