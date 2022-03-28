const router = require("express").Router();
const userShema = require('../model/user');
const mongoose = require('mongoose');

const Token = new mongoose.model("Token", userShema);


router.get('/', async(req, res)=>{
    try{
        let token = await Token.find();
        res.json(token)
    }catch (err){
        console.log(err)
    }
});

router.post('/', async(req, res)=>{
    try{
        let token = new Token({
            short_code: req.body.short_code,
            coin_name: req.body.coin_name,
            email: req.body.email,
            icon: req.body.icon,
            price_in_usd: req.body.price_in_usd,
        })
        await token.save();
        res.json(token);
    }catch(err){
        console.log(err)
    }
});


module.exports= router;
