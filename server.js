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
//GET /api/users
app.get('/api/users', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'users'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      return res.status(200).send(data);
    }catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
    })();
});
//GET /api/users/:id
app.get('/api/users/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'users'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let user = data.find(user => user.uuid === req.params.id);
      if (user) {
        return res.status(200).send(user);
      } else {
        return res.status(404).send('User not found');
      }
    }catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
    })();
});
//POST /api/users
app.post('/api/users', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'users'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let user = data.find(user => user.uuid === req.body.uuid);
      if (user) {
        return res.status(401).send('User already exists');
      } else {
        const user = {
          uuid: req.body.uuid,
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
//DELETE /api/users/:id
app.delete('/api/users/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'users'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let user = data.find(user => user.uuid === req.params.id);
      if (user) {
        await collection(db,'users').doc(user.uuid).delete();
        return res.status(200).send(user);
      } else {
        return res.status(404).send('User not found');
      }
    }catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
    })();
});

//API for pizzas;
// GET /api/pizzas
app.get('/api/pizza', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'pizza'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      return res.status(200).send(data);
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
//GET /api/pizzas/:id
app.get('/api/pizza/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'pizza'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let pizza = data.find(pizza => pizza.id === req.params.id);
      if (pizza) {
        return res.status(200).send(pizza);
      } else {
        return res.status(401).send('Pizza does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
// POST /api/pizzas/
app.post('/api/pizza/update/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'pizza'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let pizza = data.find(pizza => pizza.id === req.params.id);
      if (pizza) {
        await collection(db,'pizza').doc(pizza.id).update({
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          image: req.body.image,
        });
        return res.status(200).send(pizza);
      } else {
        return res.status(401).send('Pizza does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
// PUT /api/pizzas/:id
app.put('/api/pizza/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'pizza'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let pizza = data.find(pizza => pizza.id === req.params.id);
      if (pizza) {
        await collection(db,'pizza').doc(pizza.id).update({
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          image: req.body.image,
        });
        return res.status(200).send(pizza);
      } else {
        return res.status(401).send('Pizza does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
// DELETE /api/pizzas/:id
app.delete('/api/pizza/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'pizza'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let pizza = data.find(pizza => pizza.id === req.params.id);
      if (pizza) {
        await collection(db,'pizza').doc(pizza.id).delete();
        return res.status(200).send(pizza);
      } else {
        return res.status(401).send('Pizza does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});

//API for businesses
//GET /api/businesses
app.get('/api/businesses', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'businesses'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      return res.status(200).send(data);
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
//GET /api/businesses/:id
app.get('/api/businesses/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'businesses'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let business = data.find(business => business.id === req.params.id);
      if (business) {
        return res.status(200).send(business);
      } else {
        return res.status(401).send('Business does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
// POST /api/businesses
app.post('/api/businesses/create', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'businesses'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let business = data.find(business => business.name === req.body.name);
      if (business) {
        return res.status(401).send('Business already exists');
      } else {
        const business = {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          email: req.body.email,
          description: req.body.description,
          image: req.body.image,
        }
        await collection(db,'businesses').add(business);
        return res.status(200).send(business);
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
//PUT /api/businesses/:id
app.put('/api/businesses/update/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'businesses'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let business = data.find(business => business.id === req.params.id);
      if (business) {
        await collection(db,'businesses').doc(business.id).update({
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          email: req.body.email,
          description: req.body.description,
          image: req.body.image,
        });
        return res.status(200).send(business);
      } else {
        return res.status(401).send('Business does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
// DELETE /api/businesses/:id
app.delete('/api/businesses/delete/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'businesses'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let business = data.find(business => business.id === req.params.id);
      if (business) {
        await collection(db,'businesses').doc(business.id).delete();
        return res.status(200).send(business);
      } else {
        return res.status(401).send('Business does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});

//GET /api/orders
app.get('/api/orders', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'orders'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      return res.status(200).send(data);
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
//GET /api/orders/:id
app.get('/api/orders/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'orders'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let order = data.find(order => order.id === req.params.id);
      if (order) {
        return res.status(200).send(order);
      } else {
        return res.status(401).send('Order does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
//POST /api/orders
app.post('/api/orders', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'orders'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let order = data.find(order => order.id === req.body.id);
      if (order) {
        return res.status(401).send('Order already exists');
      } else {
        let order = {
          id: req.body.id,
          business: req.body.business,
          customer: req.body.customer,
          items: req.body.items,
          total: req.body.total,
          status: req.body.status,
        }
        await collection(db,'orders').add(order);
        return res.status(200).send(order);
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
//PUT /api/orders/:id
app.put('/api/orders/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'orders'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let order = data.find(order => order.id === req.params.id);
      if (order) {
        await collection(db,'orders').doc(order.id).update({
          business: req.body.business,
          customer: req.body.customer,
          items: req.body.items,
          total: req.body.total,
          status: req.body.status,
        });
        return res.status(200).send(order);
      } else {
        return res.status(401).send('Order does not exist');
      }
    }catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    })();
});
//DELETE /api/orders/:id
app.delete('/api/orders/:id', (req, res) => {
  (async () => {
    try {
      const querySnapshot = await getDocs(collection(db,'orders'));
      let data=[];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      let order = data.find(order => order.id === req.params.id);
      if (order) {
        await collection(db,'orders').doc(order.id).delete();
        return res.status(200).send(order);
      } else {
        return res.status(401).send('Order does not exist');
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

let port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`server is running at port ${port}`));
