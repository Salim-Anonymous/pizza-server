// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjjJjBr-8v2UUmU4Q2BqdoehVlT1XfZlA",
  authDomain: "pizza-delivery-system-6ca70.firebaseapp.com",
  projectId: "pizza-delivery-system-6ca70",
  storageBucket: "pizza-delivery-system-6ca70.appspot.com",
  messagingSenderId: "461181640404",
  appId: "1:461181640404:web:573959edc0f380ae84a541",
  measurementId: "G-TJ87TQ3SGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);