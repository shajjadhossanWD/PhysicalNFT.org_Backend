const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");


mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("monoDB is connected"))
.catch((err)=> console.log(err))

app.use(express.json());
app.use(cors());


app.use('/admin', require('./routes/user'));
app.use('/creator', require('./routes/creator'));
app.use('/collection', require('./routes/collection'));
app.use('/nfts', require('./routes/nfts'));
app.use('/tokens', require('./routes/tokens'));
app.use('./editor', require('./routes/editor'));


app.get('/', (req, res)=>{
    res.json('connected')
})
app.listen(5007, ()=> console.log("server connected"));