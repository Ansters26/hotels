const express = require('express');
const router = express.Router();
const menu = require('../models/menu');

router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        //create new menu item document using moongose model
        const newItem = new menu(data);

        //save the new person to database
        const response = await newItem.save();
        console.log('Item saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server failed'});
    }
})
.get('/',async (req,res)=>{
    try{
        const data = await menu.find();
        console.log('Data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server failed'});
    }
})
.get('/:taste',async(req,res)=>{
    try{
        const tastebud = req.params.taste;
        if(tastebud == 'Sweet' || tastebud == 'Sour' || tastebud == 'Spicy')
        {
            const taste = await menu.find({taste: tastebud});
            res.status(200).json(taste);
        }
        else
        {
            res.status(404).json({error:'Parameter invalid'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server failed'});
    }
})
.put('/:id',async(req,res)=>{
    try{
        const foodId = req.params.id;
    const updatedItem = req.body;

    const response = await menu.findByIdAndUpdate(foodId,updatedItem,{
        new : true,
        runValidators : true,
    });
    if(!response)
    {
        res.status(404).json({error : 'No id woth such name exist'});
    }
    else
    {
        console.log("Data updated");
        res.status(200).json(response);
    }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'internal server failed'});
    }
})

module.exports = router;