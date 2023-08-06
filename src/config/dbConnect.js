import mongoose from "mongoose";

mongoose.connect('mongodb+srv://lanpaiva:70567254@cluster0.wa0ror0.mongodb.net/node-library-api');

let db = mongoose.connection;

export default db;