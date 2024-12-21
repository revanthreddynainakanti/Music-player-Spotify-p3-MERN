import mongoose from "mongoose";
const MONGO_URI = "mongodb://127.0.0.1:27017/SpotifyClone";

mongoose.connect(MONGO_URI).then(console.log("Connected to database"))