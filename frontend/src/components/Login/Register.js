import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../../utils/AuthContext";
import { signInWithGoogle, signInWithFacebook } from "../../utils/firebase";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import Account from "../accounts/account";

const Register = () => {
  // Email Sign-In
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate({ Account });
    } catch (e) {
      setError(e.message);
    }
  };

  // Google Sign-In

  return (
    <div className='bg-cTenebrosa bg-cover bg-center w-screen h-screen text-white'>
      <div
        className={`bg-black/50 w-full h-screen flex items-center justify-center`}
      >
        <form className='w-full max-w-lg' onSubmit={handleSubmit}>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-first-name'
              >
                First Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-first-name'
                type='text'
                placeholder='First'
              />
              {/* <p className='text-red-500 text-xs italic'>
                  Please fill out this field.
                </p> */}
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-last-name'
              >
                Last Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-last-name'
                type='text'
                placeholder='Last'
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-password'
              >
                Email
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-email'
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-password'
              >
                Password
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-password'
                type='password'
                placeholder='************'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className='text-gray-600 text-xs italic'>
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-2'>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-city'
              >
                City
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-city'
                type='text'
                placeholder='City'
              />
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-state'
              >
                State
              </label>
              <div className='relative'>
                <select
                  className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-state'
                >
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Connecticut</option>
                  <option>Delaware</option>
                  <option>Florida</option>
                  <option>Georgia</option>
                  <option>Hawaii</option>
                  <option>Idaho</option>
                  <option>Illinois</option>
                  <option>Indiana</option>
                  <option>Iowa</option>
                  <option>Kansas</option>
                  <option>Kentucky</option>
                  <option>Louisiana</option>
                  <option>Maine</option>
                  <option>Maryland</option>
                  <option>Massachusetts</option>
                  <option>Michigan</option>
                  <option>Minnesota</option>
                  <option>Mississippi</option>
                  <option>Missouri</option>
                  <option>Montana</option>
                  <option>Nebraska</option>
                  <option>Nevada</option>
                  <option>New Hampshire</option>
                  <option>New Jersey</option>
                  <option>New Mexico</option>
                  <option>New York</option>
                  <option>North Carolina</option>
                  <option>North Dakota</option>
                  <option>Ohio</option>
                  <option>Oklahoma</option>
                  <option>Oregon</option>
                  <option>Pennsylvania</option>
                  <option>Rhode Island</option>
                  <option>South Carolina</option>
                  <option>South Dakota</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Utah</option>
                  <option>Vermont</option>
                  <option>Virginia</option>
                  <option>Washington</option>
                  <option>West Virginia</option>
                  <option>Wisconsin</option>
                  <option>Wyoming</option>
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
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-zip'
              >
                Zip
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-zip'
                type='text'
                placeholder='Zip'
              />
            </div>
          </div>
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
              className={`bg-gray-500 p-4 w-full font-medium rounded-lg flex align-middle gap-2 border-2 border-gray-700 shadow-inner shadow-md shadow-gray-700 hover:bg-gray-900 hover:border-gray-400 hover:shadow-md hover:shadow-gray-200 hover:shadow-inner`}
            >
              <AiFillFacebook className={`text-facebook text-2xl`} />
              Sign up with Facebook
            </button>
          </div>
          <center className={`my-6`}>
            <button
              type='submit'
              className={`p-4 w-full text-white bg-gray-700 font-medium rounded-lg flex justify-center align-center gap-2 hover:bg-gray-500`}
            >
              Submit
            </button>
          </center>
          <center className={`no-underline`}>
            <p className={`py-2 text-gray-700`}>
              Already have an account?
              <Link
                to='/login'
                className={`mx-4 text-gray-700 text-lg hover:underline duration-300`}
              >
                Sign In
              </Link>
            </p>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Register;
