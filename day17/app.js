

//Express.js
//minimalist web framework
//express.js is a third party module of node


var express = require('express');
const PORT = 3000
//create an instance of express class
const app = new express();




//Application level middleware
// get-is to read in CRUD operations
//get is an http request 
app.get('/',(req,res)=>{
    res.send('THIS IS MY HOME PAGE')
})

app.get('/home',(req,res)=>{
    res.send("Hi I am Home")
})



app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})//a callback function is used as argument
