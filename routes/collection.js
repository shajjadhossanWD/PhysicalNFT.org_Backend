const router = require("express").Router();
const userShema = require('../model/user');
const mongoose = require('mongoose');

const Collection = new mongoose.model("collection", userShema);


router.get('/', async(req, res)=>{
    try{
        let collection = await Collection.find();
        res.json(collection)
    }catch (err){
        console.log(err)
    }
})

router.post('/', upload.single('FeaturedImg', 'logo', 'bannerImg'), async(req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        let collection = new Collection({
            logo: result.secure_url,
            FeaturedImg: result.secure_url,
            bannerImg: result.secure_url,
            collectionName: req.body.collectionName,
            url: req.body.url,
            description: req.body.description,
            category: req.body.category,
            yoursite: req.body.yoursite,
            discord: req.body.discord,
            medium: req.body.medium,
            telegam: req.body.telegam,
            creatorEarning: req.body.creatorEarning,
            blockchain: req.body.blockchain,
            paymentToken: req.body.paymentToken,
            cloudinary_id: result.public_id,
        })
        await collection.save();
        res.json(collection);
    }catch(err){
        console.log(err)
    }
});


module.exports= router;