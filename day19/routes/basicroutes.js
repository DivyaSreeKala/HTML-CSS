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

function allRoutes(nav){

router.get('/employee',(req,res)=>{
    // res.send(employee)
    res.render("employee",{//employee is the ejs file name
        title:'Employeelist',
        data, //data in the file
        nav
    })
})

router.get('/employeeform',(req,res)=>{
    // res.send(employee)
    res.render("employeeform",{//employeeform is the ejs file name
        title:'Employee Form',
        nav //data in the file
    })
})

return router;
}


// module.exports = router;
module.exports = allRoutes;