const express = require('express');
const path = require('path');
const app = express();
const getPizzas = require('./firebase/firestore.js')
app.use("/static", express.static(path.resolve(__dirname, "public", "frontend", "static"), {extensions: ["js"]}));
app.get("/data/content.json",(req,res)=>{
  console.log(req.path);
  let data = getPizzas();
  res.send(data);
})

app.get("/login",(req,res)=>{
  console.log(req.path);
  res.sendFile(path.resolve(__dirname,"public/frontend","login.html"))
})

app.get("/*",(req,res)=>{
  console.log(req.path);
  res.sendFile(path.resolve(__dirname,"public/frontend","index.html"))
})

let port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`server is running at port ${port}`));
