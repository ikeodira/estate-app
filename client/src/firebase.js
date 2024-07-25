// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ccdce.firebaseapp.com",
  projectId: "mern-estate-ccdce",
  storageBucket: "mern-estate-ccdce.appspot.com",
  messagingSenderId: "674282713377",
  appId: "1:674282713377:web:b61164f5791c9382598e60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
