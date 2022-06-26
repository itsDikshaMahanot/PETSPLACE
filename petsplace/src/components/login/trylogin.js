import React, { useState, useEffect , notification} from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from '../../firebase';

import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

function TryLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = onAuthStateChanged(auth);
    //// a varibale collectionRef to check , get, dlete , update the data from firestore
    const collectionRef =collection(db, user);


    const registerWithEmailAndPassword = async () => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                password,
                email,
            }
            );
            console.log(res.user.uid)
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };
    const logInWithEmailAndPassword = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            notification.success({
                message: "login successfully."
            });
            console.log(res.user.uid);
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };
    const logout = async () => {
        signOut(auth);
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-green-900">
                <div class="flex self-center w-3/4 h-3/4 bg-white">
                    <div className='w-0 md:w-1/2 lg:w-1/2  bg-yellow-300'>
                        <img className='object-fill w-full h-full' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1655570485~exp=1655571085~hmac=80390930c3815834797a57709d862cfbd79298870b871f2f9a570864ba77dda6&w=740' alt='pic'></img>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2 self-center'>
                        <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Username
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e) => { setEmail(e.target.value); }} />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e) => { setPassword(e.target.value); }} />
                                <p class="text-red-500 text-xs italic">Please enter correct password.</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={registerWithEmailAndPassword}>
                                    Create user
                                </button>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={logInWithEmailAndPassword} >
                                    Sign In
                                </button>
                                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/reset">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TryLogin;