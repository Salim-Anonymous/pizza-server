import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';
import {db} from './firebase/firestore.js';
import { collection, getDocs } from "firebase/firestore";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//api for users
  //authenticate user
app.post('/api/users/authenticate', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'users'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let user = data.find(user => user.email === req.body.email);
      if (user) {
        if (user.password === req.body.password) {
          user = {
            uuid: user.uuid,
            email: user.email,
            name: user.name,
            phone: user.phone,
            role: user.role,
          }
          return res.status(200).send(user);
        } else {
          return res.status(401).send('Password is incorrect');
        }
      }
      console.log(user)
    }catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
    })();
});
  //create user
app.post('/api/users/create', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'users'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let user = data.find(user => user.email === req.body.email);
      if (user) {
        return res.status(401).send('User already exists');
      } else {
        const user = {
          email: req.body.email,
          name: req.body.name,
          phone: req.body.phone,
          role: req.body.role,
          password: req.body.password,
        }
        await collection(db,'users').add(user);
        return res.status(200).send(user);
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});

//server SPA with index.html
app.use("/static", express.static(path.resolve(__dirname, "public", "frontend", "static"), {extensions: ["js"]}));
app.get("/*",(req,res)=>{
  console.log(req.path);
  res.sendFile(path.resolve(__dirname,"public/frontend","index.html"))
})

let port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`server is running at port ${port}`));
