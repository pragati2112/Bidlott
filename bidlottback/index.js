const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();
app.use(cors());

let client= new MongoClient('mongodb://localhost:27017/newplan',{useNewUrlParser:true});
let connection;

client.connect((err,conn)=>{
if(!err)
{
    connection=conn;
    console.log("succesfully connected");
}
else{
    console.log("Not connected");
}
})


app.post('/createplan',bodyParser.json(),(req,res)=>{
    var collection= connection.db('newplan').collection('planA');
    collection.insertOne(req.body,(err,r)=>{
        if(!err)
        {
            res.send({status:"ok",message:"inserted succesfully"});
        }
    })
})


app.get('/getplans',(req,res)=>{
    var collection= connection.db('newplan').collection('planA');
    collection.find().toArray((err,docs)=>{

if(!err && docs)
{
    res.send({status:"ok",documents:docs});
}
else{
    res.send({status:"failed"});
}

})
})

app.post('/verifyadmin',bodyParser.json(),(req,res)=>{
    var collection= connection.db('newplan').collection('user');
    collection.find({email:req.body.email,password:req.body.password}).toArray((err,docs)=>{

if(!err)
{
    res.send({status:"ok"});
}
else{
    res.send({status:"failed"});
}

})
})
app.listen(3000,()=>console.log("server is listening at port 3000"));
