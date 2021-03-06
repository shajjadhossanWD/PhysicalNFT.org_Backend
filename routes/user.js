const router = require("express").Router();
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');
const userShema = require('../model/user');
const multer = require("multer");
const mongoose = require('mongoose');

const User = new mongoose.model("user", userShema);


router.post('/', upload.single('image'), async(req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        let user = new User({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            cPassword: req.body.cPassword,
            phone: req.body.phone,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
        })
        await user.save();
        res.json(user);
    }catch(err){
        console.log(err)
    }
});

router.get('/', async(req, res)=>{
    try{
        let user = await User.find();
        res.json(user)
    }catch (err){
        console.log(err)
    }
})

router.delete("/:id", async(req, res)=>{
    try{
        //find user by id
        let user = await User.findById(req.params.id);
        //delete image from cloudinary
        await cloudinary.uploader.destroy(user.cloudinary._id);
        //delete user from db
        await user.remove();
        res.json(user)
    }catch(err){
        console.log(err)
    }
});

router.put('/:id', upload.single("image"), async(req, res)=>{
    try{
        let user = await User.findById(req.params.id);
        await cloudinary.uploader.destroy(user.cloudinary_id);
        const result = await cloudinary.uploader.upload(req.file.path);
        const data = {
            name: req.body.name || user.name,
            avatar: result.secure_url || user.avatar,
            cloudinary_id: result.public_id || user.cloudinary_id,
        };
        user = await User.findByIdAndUpdate(req.params.id, data, {new: true});
        res.json(user);
    }catch(err){
        console.log(err)
    }
})

module.exports= router;