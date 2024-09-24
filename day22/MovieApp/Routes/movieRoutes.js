
const express = require('express');

const router = express.Router();
router.use(express.json())//to mention that data is in json otherwise the node js won't accept it
const movieModel = require('../model/movieData') //why whole path is defined here??

router.use(express.urlencoded({extended:true}));//to upload images or files 
//to list the movies
router.get('/list-movies',async (req,res)=>{
    try{
        const data = await movieModel.find()
        res.status(200).send(data);
    }catch(err){
        console.log(err)
    }
})

//post
router.post('/add-movie',async (req,res)=>{
    try{
        var item = req.body;//the node js knows item is json from the express.json() above
       
        const data1 = new movieModel(item);//creates a new instance of the movieModel using the item object.
        console.log(data1)
        const savedData = await data1.save();//save the variable name
        // This line saves the data1 instance to the database using the save() method.


        res.status(200).send('Post successful')
        // const data = await movieModel.insertOne({movieName : String,
        //     movieDirector : String,
        //     movieDescription : String,
        //     moviePrice : Number
        // })
    }catch(error){
        res.send(404).send("post unsuccessful")
    }
})

//update
router.put('/edit-movie/:id',async (req,res)=>{
    try{
        const item = req.body;
        const id = req.params.id;//id from the url 
        // const movieItem1 = new movieModel(item);
        const data = await movieModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('Update successful')
    }catch(err){
        res.status(404).send('Update unsuccessful')

    }
})

//delete
router.delete('/delete-movie/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await movieModel.findByIdAndDelete(id)
        res.status(200).send('deleted successfully')
    }catch(error){
        res.status(404).send('deletion unsuccessful')
    }
})

module.exports = router