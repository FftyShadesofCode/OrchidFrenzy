import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { UserAuth } from '../../utils/AuthContext'
import { signInWithGoogle, signInWithFacebook } from '../../utils/firebase'

import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'

import Account from '../accounts/account'

const Register = () => {

    // Email Sign-In
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
            navigate({Account})
        } catch (e) {
            setError(e.message)
        }
    }

    // Google Sign-In

    return (
        <div className={`bg-cTenebrosa bg-cover bg-center w-screen h-screen text-white`}>
            <div className={`bg-black/50 w-full h-screen `}>

                <div className={`flex flex-col justify-center items-center h-screen`}>

                    <form
                        action='submit'
                        className={`space-y-5 bg-tealOverlay border-2 border-irisOverlay shadow-md shadow-[0_0_15px_10px_rgba(128,0,128,0.5)] w-fit p-8 rounded-lg`}
                        onSubmit={handleSubmit}
                    >
                        <center>
                            <h1 className={`text-[50px]`}>Register</h1>
                        </center>

                        <center>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                placeholder='Enter Email Address'
                                className={`w-96 p-2 px-3 text-black bg-white border-2 border-violet rounded-lg outline-none focus:border-ultramarine placeholder-blackOverlay`}
                                required
                            />
                        </center>

                        <center>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                placeholder='Enter Password'
                                className={`w-96 p-2 px-3 text-black bg-white border-2 border-violet rounded-lg outline-none focus:border-ultramarine placeholder-blackOverlay`}
                                required
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                placeholder='Confirm Password'
                                className={`w-96 p-2 px-3 text-black bg-white border-2 border-violet rounded-lg outline-none focus:border-ultramarine placeholder-blackOverlay`}
                                required
                            />
                        </center>

                        <center className={`no-underline`}>

                            <p className={`py-2 text-white`}>
                                Already have an account?
                                <Link
                                    to='/login'
                                    className={`mx-4 text-black text-xl underline hover:text-aqua duration-300`}
                                >
                                    Sign In
                                </Link>
                            </p>
                        </center>

                        <center className={`my-6`}>
                            <button
                                type='submit'
                                className={`text-[24px] border-darkPurple border-2 bg-primaryPurple px-4 py-2 rounded-md hover:border-aqua hover:bg-teal hover:text-white duration-300 hover:bg-gray-900 hover:border-gray-400 hover:shadow-md hover:shadow-gray-200 hover:shadow-inner`}
                            >
                                Submit
                            </button>
                        </center>
                    </form>

                    <div className={`flex flex-col justify-center gap-4 mt-10`}>

                        <button
                            onClick={signInWithGoogle}
                            className={`bg-gray-500 p-4 w-full font-medium rounded-lg flex align-middle gap-2 border-2 border-gray-700 shadow-inner shadow-md shadow-gray-700 hover:bg-gray-900 hover:border-gray-400 hover:shadow-md hover:shadow-gray-200 hover:shadow-inner`}
                        >
                            <FcGoogle className={`text-2xl`} />

                            Sign up with Google
                        </button>

                        <button
                            onClick={signInWithFacebook}
                            className={`bg-gray-500 p-4 w-full font-medium rounded-lg flex align-middle gap-2 border-2 border-gray-700 shadow-inner shadow-md shadow-gray-700`}
                        >
                            <AiFillFacebook className={`text-facebook text-2xl`} />
                            Sign up with Facebook
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Register