const express = require('express');
const path = require('path');

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public", "frontend", "static"), {extensions: ["js"]}));

app.get("/*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"public/frontend","index.html"))
})

let port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`server is running at port ${port}`));
