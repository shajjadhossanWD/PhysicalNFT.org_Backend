const router = require("express").Router();
const userShema = require('../model/user');
const mongoose = require('mongoose');

const Editor = new mongoose.model("editor", userShema);


router.get('/', async(req, res)=>{
    try{
        let editor = await Editor.find();
        res.json(editor)
    }catch (err){
        console.log(err)
    }
})


module.exports= router;