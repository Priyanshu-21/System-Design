import express from "express"; 
import dotenv from "dotenv"; 
import DBConnect from "./db/dbConnect.ts"
import createGarbageModel from "./models/garages.model.ts";
dotenv.config(); 

const app = express(); 

app.listen(process.env.PORT || 3000);   

app.use(express()); //  application middleware 

DBConnect();
createGarbageModel(); 
console.log(`Application is running on Port ${process.env.PORT}`); 
