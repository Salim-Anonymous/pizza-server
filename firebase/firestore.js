import {getFirestore} from 'firebase/firestore'
import init from "./init.js";
// Add a new document in collection "cities"
const app = init();
export const db = getFirestore(app);











