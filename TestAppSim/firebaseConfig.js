// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5pUxZGiPmJg7eh3AA3wWDqjpVvqW1NPo",
  authDomain: "friendlyeats-ea74e.firebaseapp.com",
  projectId: "friendlyeats-ea74e",
  storageBucket: "friendlyeats-ea74e.appspot.com",
  messagingSenderId: "1071587310248",
  appId: "1:1071587310248:web:5e713cd4e1873d6bf6a09d",
  measurementId: "G-VVLF48VMTW"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);
