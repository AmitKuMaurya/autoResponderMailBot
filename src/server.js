import express from "express";
const PORT = 7777;
const app =  express();

app.use('/',async(req,res)=>{
    res.status(200).send("Landed on home.");
})

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})