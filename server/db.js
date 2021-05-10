var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/lsdp', { useUnifiedTopology: true },(err,client)=>{
    if(err) throw err
    var db  = client.db('lsdp')

  /*  exports.createcol = ()=>{

        db.createCollection('user', (err,res)=>{
            if(err){
                 throw err;
            }
            else{
                console.log('users conected');
            }
        });
    }*/
    exports.insuser = (insobj)=>{
       
        db.collection('users').insertOne(insobj, (err,res)=>{
            if(err){ 
                throw err;
            }
            else{
                console.log('feedback inserted');
            }
        });
    }
})