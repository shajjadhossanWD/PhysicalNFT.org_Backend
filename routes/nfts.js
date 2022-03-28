const router = require("express").Router();
const userShema = require('../model/user');
const mongoose = require('mongoose');

const Nft = new mongoose.model("nft", userShema);


router.get('/', async(req, res)=>{
    try{
        let nft = await Nft.find();
        res.json(nft)
    }catch (err){
        console.log(err)
    }
})


module.exports= router;