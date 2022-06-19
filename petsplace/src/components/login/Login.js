import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../firebase'
export default function Login() {
    const [inputs, setInputs] = useState({});
    const getInputs = (event) => {
        let input = { [event.target.name]: event.target.value };
        setInputs({ ...inputs, ...input })
    }

    const signIN = () => {
        signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message);
        })

    }
    const createUser = () => {
        createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message);
        })
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
                                <input name='email' onChange={getInputs} value={inputs.email} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input name='password' onChange={getInputs} value={inputs.password} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                <p class="text-red-500 text-xs italic">Please enter correct password.</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <button onClick={createUser} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Create user
                                </button>
                                <button onClick={signIN} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
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
    )
}
