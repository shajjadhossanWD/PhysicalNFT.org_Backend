const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5007;
const app = express();

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
//connection creation and create a new bd
mongoose.connect("mongodb://localhost:27017/physicalNFT")
.then(() => console.log("Mongodb Connected"))
.catch((err) => console.log(err));

//schema
const playlistSchema = new mongoose.Schema({
    date:{
        type:Date,
        default: Date.now
    },
    name: String,
    active: Boolean,
    roll: Number
})

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document or insert
const creatDocument = async () =>{
    try{
        const reactPlaylist = new Playlist({
            name: "React JS",
            roll: 3489,
            active: true
        })
        const result = await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

app.get("/api", (req, res) => {
    res.send("Server Running...");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
