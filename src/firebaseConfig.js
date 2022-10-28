// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZrWgKMnxfHAblcLT_nJOcwoIcSPfqL4",
  authDomain: "vite-firebase-2ff98.firebaseapp.com",
  projectId: "vite-firebase-2ff98",
  storageBucket: "vite-firebase-2ff98.appspot.com",
  messagingSenderId: "602587251349",
  appId: "1:602587251349:web:02eb300743878ab998119c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
