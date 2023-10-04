// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1727a.firebaseapp.com",
  projectId: "mern-auth-1727a",
  storageBucket: "mern-auth-1727a.appspot.com",
  messagingSenderId: "617001514734",
  appId: "1:617001514734:web:dd1b2f16e2aa4b5577a5ff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
