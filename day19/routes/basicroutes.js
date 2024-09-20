const express = require('express')

const router = express.Router();

const data = [{
    name:"emp1",
    eid:"e101"
},
{
    name:"emp2",
    eid:"e102"
}]

function allRoutes(nav){//this fn is used in case of ejs if there is something to pass which is common to all api 
    //here fn is defined only because the nav is to be passed fro app.js
//in normal crud this is not required

router.get('/employee',(req,res)=>{//to render the employee page on the path/user/employee
    // res.send(employee)
    res.render("employee",{//employee is the ejs file name to be rendered
        title:'Employeelist',//title of the page
        data, //data in the file
        nav
    })
})

router.get('/employeeform',(req,res)=>{//to render the employeeform page on the path /user/employeeform
    // res.send(employee)
    res.render("employeeform",{//employeeform is the ejs file name
        title:'Employee Form',
        nav //data in the file
    })
})

return router;
}


// module.exports = router;
module.exports = allRoutes;//fn name is exported from the basicroutes file