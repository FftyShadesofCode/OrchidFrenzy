import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerWithEmailAndPassword, signInWithGoogle, signInWithFacebook } from '../../utils/firebase'
import { UserAuth } from '../../utils/AuthContext'
import Account from "../accounts/account";
import States from "./StatesArray";
import Button from "../Button/button";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

const Register = () => {
  // Email Sign-In
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createConfirmPassword, setCreateConfirmPassword] = useState("");
  const [createCity, setCreateCity] = useState('');
  const [createState, setCreateState] = useState('')
  const [createZipCode, setCreateZipCode] = useState('')
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(createEmail, createPassword);
      navigate({ Account });
    } catch (e) {
      setError(e.message);
    }
  };

  // Google Sign-In

  return (
      <div className='flex items-center h-full bg-white mt-10'>
        <div className='flex-1h-full max-w-4xl mx-auto bg-purple-100 rounded-xl shadow-2xl'>
          <div className='flex flex-col md:flex-row'>
            <div className='h-32 md:h-auto md:w-1/2'>
              <img
                  className='object-cover w-full h-full'
                  src='https://images.unsplash.com/photo-1605996370592-b6f7a81e382e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3JjaGlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                  alt='img'
              />
            </div>
            <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
              <form className='w-full h-full'
                    onClick={() => registerWithEmailAndPassword(createEmail, createPassword, createConfirmPassword, createCity, createState, createZipCode)}>
                <h1 className='mb-8 text-2xl font-bold text-center text-purple-700'>
                  Create an Account
                </h1>
                <input
                    type='email'
                    className='w-full mb-8 px-4 py-2 h-[2.5rem] text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                    placeholder='Email'
                    value={createEmail}
                    onChange={(e) => setCreateEmail(e.target.value)}
                />
                <input
                    className='w-full px-4 py-2 h-[2.5rem] text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                    placeholder='Password'
                    type='password'
                    value={createPassword}
                    onChange={(e) => setCreatePassword(e.target.value)}
                />
                <input
                    className='w-full px-4 py-2 h-[2.5rem] mt-4 text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                    placeholder='Confirm Password'
                    type='password'
                    value={createConfirmPassword}
                    onChange={(e) => setCreateConfirmPassword(e.target.value)}
                />
                <div className='flex flex-wrap -mx-3 mb-2 mt-10'>
                  <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <input
                        className='w-full px-4 py-2 h-[2.5rem] text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                        id='grid-city'
                        type='text'
                        value={createCity}
                        placeholder='City'
                    />
                  </div>
                  <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <div className='relative'>
                      <select
                          className='block appearance-none w-full px-4 py-2 h-[2.5rem] text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                          id='grid-state'
                      >
                        {States.map((state) => {
                          return (
                              <option key={state.id} value={state.name}>
                                {state.name}
                              </option>
                          );
                        })}
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                            className='fill-current h-4 w-4'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                    <input
                        className='w-full px-4 py-2 h-[2.5rem] text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-9000'
                        id='grid-zip'
                        type='text'
                        value={createZipCode}
                        placeholder='Zip'
                    />
                  </div>
                </div>
                <Button
                    text='Create Account'
                    type='button'
                    buttonStyle='square'
                    onClick={() => registerWithEmailAndPassword(createEmail, createPassword, createConfirmPassword, createCity, createState, createZipCode)}
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
                    Sign Up with Google
                  </button>
                  <button
                      onClick={signInWithFacebook}
                      className='p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-purple-900 hover:bg-white hover:border-purple-500'
                  >
                    <AiFillFacebook className='text-facebook text-2xl' />
                    Sign Up with Facebook
                  </button>
                  <p className='py-2 text-sm text-purple-900 flex justify-center'>
                    Already have an account?
                    <Link
                        to='/login'
                        className='mx-2 text-purple-900 text-sm hover:underline duration-300'
                    >
                      Login
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

export default Register;