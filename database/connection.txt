var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
let db;
const connection =function (callback){
     mongoclient.connect("mongodb://localhost:27017/employee",(err,data)=>{
         if(err){
             console.log('no databse');
             
         }else{
             console.log('connected');
             db = data.db();//instance
             db.collection("users").find().toArray((err,data)=>{
                 if(!err){
                     
                     callback(data)
                 }
             })
         }

     })
}



module.exports = connection;