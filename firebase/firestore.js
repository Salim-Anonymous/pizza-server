import { addDoc, setDoc,doc,getDocs,collection,query} from "firebase/firestore";
import {getFirestore} from 'firebase/firestore'
import init from "./init.js";
// Add a new document in collection "cities"
const app = init();
const db = getFirestore(app);

//Create
const addCustomer = async ()=>{
    await setDoc(doc(db, "", ''), {

    });
}
export async function addOrders(){
    await setDoc(doc(db, "order",), {

    });
}

//Read
export async function getPizzas(){
    const querySnapshot = await getDocs(collection(db, "pizzas"));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}
export async function getOrders(){
    const querySnapshot = await getDocs(collection(db,'customers'));
}

export async function getBusinesses(){
    const querySnapshot = await getDocs(collection(db,'customers'));
}
//Update

//Delete













