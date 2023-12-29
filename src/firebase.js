// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8-VyAgYoST-2YL-K2RBAB5PfkGnOGeiA",
  authDomain: "react-chat-e4d5c.firebaseapp.com",
  projectId: "react-chat-e4d5c",
  storageBucket: "react-chat-e4d5c.appspot.com",
  messagingSenderId: "927757767119",
  appId: "1:927757767119:web:6e34ec5ef95dda0c4b42ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()