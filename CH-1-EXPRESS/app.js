import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json("hello from server")
}) 

const port = 5000

app.listen(port,()=>{
    console.log("hello server running",port)
})