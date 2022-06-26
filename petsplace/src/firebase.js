import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB1sCgm7hHrnXsmoFdBCERLJYgXFNAN5g4",
    authDomain: "petsplace-1af0b.firebaseapp.com",
    projectId: "petsplace-1af0b",
    storageBucket: "petsplace-1af0b.appspot.com",
    messagingSenderId: "607955742899",
    appId: "1:607955742899:web:0667a297b9a08d889c00c6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {
    auth,
    db
};

