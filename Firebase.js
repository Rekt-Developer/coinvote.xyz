// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVdX-pgGVIACUSrNW0MMcnJ7amTAyE0GY",
  authDomain: "coin-ab637.firebaseapp.com",
  projectId: "coin-ab637",
  storageBucket: "coin-ab637.appspot.com",
  databaseURL: "https://coin-ab637-default-rtdb.firebaseio.com/",
  messagingSenderId: "176054285359",
  appId: "1:176054285359:web:b3a4b6051197212cb482da",
  measurementId: "G-FGC91JTFYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app)