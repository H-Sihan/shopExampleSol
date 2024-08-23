// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNPeP-BDpTyH7bCgIYWqM15H4khcQCYAw",
  authDomain: "next-app-store-ccef3.firebaseapp.com",
  projectId: "next-app-store-ccef3",
  storageBucket: "next-app-store-ccef3.appspot.com",
  messagingSenderId: "67800534427",
  appId: "1:67800534427:web:0b50b7af11a3402756e53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };