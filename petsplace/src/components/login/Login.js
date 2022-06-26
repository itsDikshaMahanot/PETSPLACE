import React, { useState, notification } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from '../../firebase'
import { async } from '@firebase/util';


export default function Login() {

    const [inputs, setInputs] = useState({});
    const getInputs = (event) => {
        let input = { [event.target.name]: event.target.value };
        setInputs({ ...inputs, ...input })
        event.target.value('');
    }


    const signIN = async () => {
        await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then((res) => {
                console.log(res.user)
                alert("successfull logged in")
            },
                setInputs(''))
            .catch((err) => {
                alert(err.message);
            })

    }
    const createUser = async () => {
        await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then((res) => {
                const user = res.user;
                addDoc(collection(db, "users"), {
                    uid: user.uid,
                    password: inputs.password,
                    email: inputs.email,
                }
                );
                this.inputs.email.value = "";
                this.inputs.password.value = "";
                console.log(res.user)
            })
            .catch((err) => {
                alert(err.message);
            })
    }


    const reset = () => {
    }

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
                                <input name='email'
                                    onChange={getInputs} value={inputs.email}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <div class="flex items-center ">
                                    <input name='password'
                                        onChange={getInputs} value={inputs.password}
                                        class="shadow appearance-none border border-red-500 w-full rounded py-2 px-3 text-gray-700 mb-3 -mr-7 focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17.607"
                                        height="17.076"
                                        viewBox="0 2 17.607 17.076"
                                    >
                                        <path
                                            id="eye-off"
                                            d="M12.392,16.769a8.718,8.718,0,0,1-9.935-5.938A8.675,8.675,0,0,1,3.817,8.2m5.1.79a2.611,2.611,0,1,1,3.692,3.692M8.914,8.985,12.6,12.675M8.916,8.986,6.053,6.124m6.554,6.554,2.863,2.863M2.929,3,6.053,6.124m0,0a8.7,8.7,0,0,1,13.011,4.707,8.723,8.723,0,0,1-3.6,4.708m0,0,3.123,3.123"
                                            transform="translate(-1.957 -2.293)"
                                            fill="none"
                                            stroke="#949090"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeidth="1"
                                        />
                                    </svg>
                                </div>
                                <p class="text-red-500 text-xs italic">Please enter correct password.</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <button onClick={createUser} class="sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Create user
                                </button>
                                <button onClick={() => { signIN(); reset() }} class="sm:mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
                                    Sign In
                                </button>
                                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/reset">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}
