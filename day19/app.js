const express = require('express');

const app = new express();

const morgan = require('morgan')
app.use(morgan('dev'))

// const basicRoutes = require('./routes/basicroutes')
// app.use('/user',basicRoutes);

app.set('view engine','ejs');// set ejs as the template engine
app.set('views',__dirname+'/views');//the 'views' in first param (it is a keyword)is the same does not depend on folder name
// and '/views' is the path

app.use(express.static('public'))//states that all the static files are in the public folder(so whenever the sttic files (mentioned below)are accessed the js engine looks in the public folder
//images,pdf,documents,css,js file etc.. are examples of static files


const nav = [
    {
        link:'/user/employee' , name:'Home'
    },
    {
        link:'/user/employeeform' , name:'Add Employee'
    }
]

const basicRoutes = require('./routes/basicroutes')(nav);//the module exported from the basicroutes file is required here
// the function is reqired from the basicroutes file so nav is passed to it
//to pass nav to the function in basicroutes.js 
app.use('/user',basicRoutes);//'/user' is the path to get basicroutes????



app.listen('5000',()=>{
    console.log("Server started at port 5000")
    console.log(__dirname)
})