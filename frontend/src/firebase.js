// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdtndaIJhjcewnFLebYgRlvsuKex6wqxo",
  authDomain: "community-website-a33fd.firebaseapp.com",
  projectId: "community-website-a33fd",
  storageBucket: "community-website-a33fd.appspot.com",
  messagingSenderId: "841583262549",
  appId: "1:841583262549:web:b750177bb9c8f818f7cddc",
  measurementId: "G-40DK7K8RBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
