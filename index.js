const express=require('express');
const app=express();
app.get("/mukund",(req,res)=>{
    res.send("hello mukund");
});
app.listen(7000,()=>{
    console.log("server is listening on port 7000.");
});