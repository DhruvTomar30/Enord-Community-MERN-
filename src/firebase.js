// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8PARrRlEEfuX69LkZNxn9pe-FNWQHnq8",
  authDomain: "enordcommunity.firebaseapp.com",
  projectId: "enordcommunity",
  storageBucket: "enordcommunity.appspot.com",
  messagingSenderId: "715937694775",
  appId: "1:715937694775:web:1b792ce0d0b52b61a06bb2",
  measurementId: "G-WGV9SBL5ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
