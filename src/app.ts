import express from "express"; 
import dotenv from "dotenv"; 
import DBConnect from "./db/dbConnect.ts"
dotenv.config(); 

const app = express(); 

app.listen(process.env.PORT || 3000);   

app.use(express()); //  application middleware 

DBConnect();

console.log(`Application is running on Port ${process.env.PORT}`); 
