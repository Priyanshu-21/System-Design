import express from "express"; 
import dotenv from "dotenv"; 
dotenv.config(); 

const app = express(); 

app.listen(process.env.PORT || 8080);   

app.get('/hello', (req, res) => {
    res.send("Hello from the server !!!");
});

console.log(`Application is running on Port ${process.env.PORT}`); 
