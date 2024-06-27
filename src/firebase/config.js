// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDolFm_tH4q2jOXCCJTdbPDwpkSPGRlLTU",
    authDomain: "react-cursos-f632a.firebaseapp.com",
    projectId: "react-cursos-f632a",
    storageBucket: "react-cursos-f632a.appspot.com",
    messagingSenderId: "583908313983",
    appId: "1:583908313983:web:1e8fcbca5155e2a303a84a"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);