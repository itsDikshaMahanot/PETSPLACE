import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDIXJ5YT7hoNbBFqK3TBcV41-TzIO-7n7w",
    authDomain: "fir-auth-6edd8.firebaseapp.com",
    projectId: "fir-auth-6edd8",
    storageBucket: "fir-auth-6edd8.appspot.com",
    messagingSenderId: "904760319835",
    appId: "1:904760319835:web:44fd0d957f114b4e51447e",
    measurementId: "G-Q4TYKH9GG7",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {
    auth,
    db
};

