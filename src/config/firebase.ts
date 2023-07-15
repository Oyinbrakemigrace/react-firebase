// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lGsQdFK1WZjVpQj8Xq5jNOXdDgFIZug",
  authDomain: "react-project-f0a04.firebaseapp.com",
  projectId: "react-project-f0a04",
  storageBucket: "react-project-f0a04.appspot.com",
  messagingSenderId: "855748713075",
  appId: "1:855748713075:web:102f0f765a38d7a5de2806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()