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
    <div className='flex items-center min-h-screen bg-white'>
      <div className='flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl'>
        <div className='flex flex-col md:flex-row'>
          <div className='h-32 md:h-auto md:w-1/2'>
            <img
              className='object-cover w-full h-full'
              // src='https://source.unsplash.com/user/erondu/1600x900'
              src='https://images.unsplash.com/photo-1610397648930-477b8c7f0943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3JjaGlkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='img'
            />
          </div>
          <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-2xl font-bold text-center text-gray-700'>
                Log In
              </h1>
              <div>
                {/* <label className='block text-sm'>Email</label> */}
                <input
                  type='email'
                  className='w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600'
                  placeholder='Email'
                />
              </div>
              <br />
              <div>
                {/* <label className='block mt-4 text-sm'>Password</label> */}
                <input
                  className='w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600'
                  placeholder='Password'
                  type='password'
                />
              </div>
              <p className='mt-4'>
                <a
                  className='text-sm text-blue-600 hover:underline'
                  href='./forgot-password.html'
                >
                  Forgot your password?
                </a>
              </p>
              <button
                className='block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
                href='#'
              >
                Log in
              </button>
              <hr className='my-8' />
              <div className={`flex flex-col justify-center gap-4 mt-10`}>
                <button
                  onClick={signInWithGoogle}
                  className={`p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-gray-700 hover:bg-gray-200 hover:border-gray-400`}
                >
                  <FcGoogle className={`text-2xl`} />
                  Sign in with Google
                </button>
                <button
                  onClick={signInWithFacebook}
                  className={`p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-gray-700 hover:bg-gray-200 hover:border-gray-400`}
                >
                  <AiFillFacebook className={`text-facebook text-2xl`} />
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className={`bg-cTenebrosa bg-cover bg-center w-screen h-screen text-white`}
    // >
    //   <div className={`bg-black/50 w-full h-screen `}>
    //     <div className={`flex flex-col justify-center items-center h-screen`}>
    //       <form
    //         action='submit'
    //         className={`space-y-5 bg-tealOverlay border-2 border-irisOverlay shadow-md shadow-[0_0_15px_10px_rgba(128,0,128,0.5)] w-fit p-8 rounded-lg`}
    //         onSubmit={handleSubmit}
    //       >
    //         <center>
    //           <h1 className={`text-[50px]`}>Login</h1>
    //         </center>

    //         <center>
    //           <input
    //             onChange={(e) => setEmail(e.target.value)}
    //             type='text'
    //             placeholder='Enter Email Address'
    //             className={`w-96 p-2 px-3 text-black bg-white border-2 border-violet rounded-lg outline-none focus:border-ultramarine placeholder-blackOverlay`}
    //             required
    //           />
    //         </center>

    //         <center>
    //           <input
    //             onChange={(e) => setPassword(e.target.value)}
    //             type='password'
    //             placeholder='Enter Password'
    //             className={`w-96 p-2 px-3 text-black bg-white border-2 border-violet rounded-lg outline-none focus:border-ultramarine placeholder-blackOverlay`}
    //             required
    //           />
    //         </center>

    //         <center className={`no-underline`}>
    //           <Link
    //             to=''
    //             className={`mx-4 text-white hover:text-aqua duration-300`}
    //           >
    //             Forgot Password?
    //           </Link>

    //           <p className={`py-2 text-white`}>
    //             Don't have an account yet?
    //             <Link
    //               to='/register'
    //               className={`mx-4 text-black text-xl underline hover:text-aqua duration-300`}
    //             >
    //               Register
    //             </Link>
    //           </p>
    //         </center>

    //         <center className={`my-6`}>
    //           <Button
    //             text='Submit'
    //             type='button'
    //             buttonStyle='rounded'
    //             handleClick={() => console.log("Clicked!")}
    //           />
    //           <button
    //             type='submit'
    //             className={`text-[24px] border-darkPurple border-2 bg-primaryPurple px-4 py-2 rounded-md hover:border-aqua hover:bg-teal hover:text-white duration-300`}
    //           >
    //             Submit
    //           </button>
    //         </center>
    //       </form>

    //       <div className={`flex flex-col justify-center gap-4 mt-10`}>
    //         <button
    //           onClick={signInWithGoogle}
    //           className={`bg-gray-500 p-4 w-full font-medium rounded-lg flex align-middle gap-2 border-2 border-gray-700 shadow-inner shadow-md shadow-gray-700 hover:bg-gray-900 hover:border-gray-400 hover:shadow-md hover:shadow-gray-200 hover:shadow-inner`}
    //         >
    //           <FcGoogle className={`text-2xl`} />
    //           Sign in with Google
    //         </button>

    //         <button
    //           onClick={signInWithFacebook}
    //           className={`bg-gray-500 p-4 w-full font-medium rounded-lg flex align-middle gap-2 border-2 border-gray-700 shadow-inner shadow-md shadow-gray-700 hover:bg-gray-900 hover:border-gray-400 hover:shadow-md hover:shadow-gray-200 hover:shadow-inner`}
    //         >
    //           <AiFillFacebook className={`text-facebook text-2xl`} />
    //           Sign in with Facebook
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
