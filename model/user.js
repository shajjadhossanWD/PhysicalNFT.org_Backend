const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    name:{
        type: String,
    },
    userName:{
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    bio:{
        type: String,
    },
    phone:{
        type: String,
    },
    password:{
        type: String,
    },
    cPassword:{
        type: String,
    },
    profileImg:{
        type: String,
    },
    coverImg:{
        type: String,
    },
    instagram:{
        type: String,
    },
    website:{
        type: String,
    },
    twitter:{
        type: String,
    },
    avatar:{
        type: String,
    },
    cloudinary_id:{
        type: String,
    },
    short_code:{
        type: String,
    },
    coin_name:{
        type: String,
    },
    icon:{
        type: String,
    },
    price_in_usd:{
        type: Number,
    },
    logo:{
        type: String
    },
    FeaturedImg:{
        type: String
    },
    bannerImg:{
        type: String
    },
    collectionName:{
        type: String
    },
    url:{
        type: String,
    },
    description:{
        type: String,
    },
    category:{
        type: String,
    },
    yoursite:{
        type: String,
    },
    discord:{
        type: String,
    },
    medium:{
        type: String,
    },
    telegam:{
        type: String,
    },
    creatorEarning:{
        type: String,
    },
    blockchain:{
        type: String,
    },
    paymentToken:{
        type: String,
    }
});
module.exports =  userSchema;