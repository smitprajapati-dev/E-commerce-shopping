// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZD8_obUfHBFFxTHRWppoYX7TILsZ_-o",
  authDomain: "e-commerce-82f50.firebaseapp.com",
  projectId: "e-commerce-82f50",
  storageBucket: "e-commerce-82f50.appspot.com",
  messagingSenderId: "45482947612",
  appId: "1:45482947612:web:de31fc1671ebaf058e9bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)


export {fireDB, auth} 