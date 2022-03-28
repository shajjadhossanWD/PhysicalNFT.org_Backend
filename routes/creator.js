const router = require("express").Router();
const userShema = require('../model/user');
const mongoose = require('mongoose');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

const Creator = new mongoose.model("creator", userShema);


router.get('/', async(req, res)=>{
    try{
        let creator = await Creator.find();
        res.json(creator)
    }catch (err){
        console.log(err)
    }
});

router.post('/', upload.single('profileImg', 'coverImg'), async(req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        let user = new Creator({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            bio: req.body.bio,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            website: req.body.website,
            profileImg: result.secure_url,
            coverImg: result.secure_url,
            cloudinary_id: result.public_id,
        })
        await user.save();
        res.json(user);
    }catch(err){
        console.log(err)
    }
});




module.exports= router;