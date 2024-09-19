const express = require('express');

const app = new express();

const morgan = require('morgan')
app.use(morgan('dev'))

// const basicRoutes = require('./routes/basicroutes')
// app.use('/user',basicRoutes);

app.set('view engine','ejs');
app.set('views',__dirname+'/views');//the 'views' in first param is the same does not depend on folder name

app.use(express.static('public'))

const nav = [
    {
        link:'/user/employee' , name:'Home'
    },
    {
        link:'/user/employeeform' , name:'Add Employee'
    }
]

const basicRoutes = require('./routes/basicroutes')(nav);//to pass nav to basicroutes.js
app.use('/user',basicRoutes);

app.listen('5000',()=>{
    console.log("Server started at port 5000")
})