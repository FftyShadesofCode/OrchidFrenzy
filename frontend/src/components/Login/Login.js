import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Account from "../accounts/account";
import { UserAuth } from "../../utils/AuthContext";
import { signInWithGoogle, signInWithFacebook } from "../../utils/firebase";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import Button from "../Button/button";

const Login = () => {
  // Email Sign-In
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate({ Account });
    } catch (e) {
      setError(e.message);
    }
  };

  return (

    <div className='flex items-center h-screen bg-white'>
      <div className='flex-1h-full mx-auto bg-purple-100 rounded-xl shadow-2xl'>
        <div className='flex flex-col md:flex-row'>
          <div className='h-32 md:h-auto md:w-1/2'>
            <img
              className='object-cover w-full h-full'
              src='https://images.unsplash.com/photo-1610397648930-477b8c7f0943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JjaGlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt='img'
            />
          </div>
          <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <form className='w-full' onSubmit={handleSubmit}>
              <h1 className='mb-8 text-2xl font-bold text-center text-purple-700'>
                Log In to Your Account
              </h1>
              <input
                type='email'
                className='w-full mb-8 px-4 py-2 text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='w-full px-4 py-2 text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                placeholder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='mt-4'>
                <a
                  className='text-sm text-purple-500 hover:underline'
                  href='./forgot-password.html'
                >
                  Forgot your password?
                </a>
              </p>
              <Button
                text='Log In'
                type='button'
                buttonStyle='square'
                handleClick={() => console.log("Clicked!")}
              />
              <div
                style={{
                  borderTop: "1px solid #301934",
                  marginTop: 30,
                }}
              ></div>
              <div className='flex flex-col justify-center gap-4 mt-8'>
                <button
                  onClick={signInWithGoogle}
                  className='p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-purple-900 hover:bg-white hover:border-purple-500'
                >
                  <FcGoogle className='text-2xl text-purple-900' />
                  Log In with Google
                </button>
                <button
                  onClick={signInWithFacebook}
                  className='p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-purple-900 hover:bg-white hover:border-purple-500'
                >
                  <AiFillFacebook className='text-facebook text-2xl' />
                  Log In with Facebook
                </button>
                <p className='py-2 text-sm text-purple-900 flex justify-center'>
                  Don't have an account yet?
                  <Link
                    to='/register'
                    className='mx-2 text-purple-900 text-sm hover:underline duration-300'
                  >
                    Forgot your password?
                  </a>
                </p>
                <Button
                    text='Log In'
                    type='button'
                    buttonStyle='square'
                    handleClick={() => console.log("Clicked!")}
                />
                <div
                    style={{
                      borderTop: "1px solid #301934",
                      marginTop: 30,
                    }}
                ></div>
                <div className='flex flex-col justify-center gap-4 mt-8'>
                  <button
                      onClick={signInWithGoogle}
                      className='p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-purple-900 hover:bg-white hover:border-purple-500'
                  >
                    <FcGoogle className='text-2xl text-purple-900' />
                    Log In with Google
                  </button>
                  <button
                      onClick={signInWithFacebook}
                      className='p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-purple-900 hover:bg-white hover:border-purple-500'
                  >
                    <AiFillFacebook className='text-facebook text-2xl' />
                    Log In with Facebook
                  </button>
                  <p className='py-2 text-sm text-purple-900 flex justify-center'>
                    Don't have an account yet?
                    <Link
                        to='/register'
                        className='mx-2 text-purple-900 text-sm hover:underline duration-300'
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;