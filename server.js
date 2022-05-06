import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
import {getPizzas,getOrders,getBusinesses,addOrders} from "./firebase/firestore.js";

app.use("/static", express.static(path.resolve(__dirname, "public", "frontend", "static"), {extensions: ["js"]}));
app.get("/data/content.json",async (req, res) => {
  console.log(req.path);
  let data = await getPizzas();
  res.send(data);
})

app.get("/data/business/orders",async (req,res)=>{
  console.log(req.path);
  let data = await getOrders();
  console.log(data);
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
