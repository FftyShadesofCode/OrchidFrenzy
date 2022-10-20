import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../utils/AuthContext";
import { signInWithGoogle, signInWithFacebook } from "../../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import Account from "../accounts/account";
import States from "./StatesArray";
import Button from "../Button/button";

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
    <div className='flex items-center min-h-screen bg-white'>
      <div className='flex-1 h-full max-w-4xl mx-auto bg-purple-100 rounded-lg shadow-xl'>
        <div className='flex flex-col md:flex-row'>
          <div className='h-32 md:h-auto md:w-1/2'>
            <img
              className='object-cover w-full h-full'
              src='https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9yY2hpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='img'
            />
          </div>
          <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <form className='w-full' onSubmit={handleSubmit}>
              <h1 className='mb-8 text-2xl font-bold text-center text-purple-700'>
                Create an Account
              </h1>
              <input
                type='email'
                className='w-full mb-8 px-4 py-2 h-[2.5rem] text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='w-full px-4 py-2 h-[2.5rem] text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                placeholder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className='w-full px-4 py-2 h-[2.5rem] mt-4 text-sm border rounded-md focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-900'
                placeholder='Confirm Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
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

// <div className='bg-cover bg-center w-screen h-screen'>
//   <div className='w-full h-screen flex items-center justify-center'>
//     <form className='w-full max-w-lg' onSubmit={handleSubmit}>
//       <div className='flex flex-wrap -mx-3 mb-6'>
//         <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
//           <label
//             className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//             htmlFor='grid-first-name'
//           >
//             First Name
//           </label>
//           <input
//             className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
//             id='grid-first-name'
//             type='text'
//             placeholder='First Name'
//           />
//         </div>
//         <div className='w-full md:w-1/2 px-3'>
//           <label
//             className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//             htmlFor='grid-last-name'
//           >
//             Last Name
//           </label>
//           <input
//             className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//             id='grid-last-name'
//             type='text'
//             placeholder='Last Name'
//           />
//         </div>
//       </div>
//       <div className='flex flex-wrap -mx-3 mb-6'>
//         <div className='w-full px-3'>
//           <label
//             className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//             htmlFor='grid-password'
//           >
//             Email
//           </label>
//           <input
//             className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//             id='grid-email'
//             type='email'
//             placeholder='Email'
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className='flex flex-wrap -mx-3 mb-6'>
//         <div className='w-full px-3'>
//           <label
//             className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//             htmlFor='grid-password'
//           >
//             Password
//           </label>
//           <input
//             className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//             id='grid-password'
//             type='password'
//             placeholder='Password'
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <p className='text-gray-600 text-xs italic'>
//             Make it as long and as crazy as you'd like
//           </p>
//         </div>
//       </div>
//       <div className='flex flex-wrap -mx-3 mb-2'>
//         <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
//           <label
//             className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//             htmlFor='grid-city'
//           >
//             City
//           </label>
//           <input
//             className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//             id='grid-city'
//             type='text'
//             placeholder='City'
//           />
//         </div>
//         <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
//           <label
//             className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//             htmlFor='grid-state'
//           >
//             State
//           </label>
//           <div className='relative'>
//             <select
//               className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//               id='grid-state'
//             >
//               {States.map((state) => {
//                 return (
//                   <option key={state.id} value={state.name}>
//                     {state.name}
//                   </option>
//                 );
//               })}
//             </select>
//             <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
//               <svg
//                 className='fill-current h-4 w-4'
//                 xmlns='http://www.w3.org/2000/svg'
//                 viewBox='0 0 20 20'
//               >
//                 <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
//           <label
//             className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//             htmlFor='grid-zip'
//           >
//             Zip
//           </label>
//           <input
//             className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//             id='grid-zip'
//             type='text'
//             placeholder='Zip'
//           />
//         </div>
//       </div>
//       <div
//         style={{
//           borderTop: "1px solid #301934",
//           marginTop: 30,
//         }}
//       ></div>
//       <div className={`flex flex-col justify-center gap-4 mt-10`}>
//         <button
//           onClick={signInWithGoogle}
//           className='p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-purple-900 hover:bg-white hover:border-purple-500'
//         >
//           <FcGoogle className='text-2xl' />
//           Sign up with Google
//         </button>

//         <button
//           onClick={signInWithFacebook}
//           className='p-4 w-full font-medium rounded-lg flex justify-center gap-2 border-2 border-purple-900 hover:bg-white hover:border-purple-500'
//         >
//           <AiFillFacebook className='text-facebook text-2xl' />
//           Sign up with Facebook
//         </button>
//       </div>
//       <center className='my-6'>
//         <Button
//           text='Create Account'
//           type='button'
//           buttonStyle='square'
//           handleClick={() => console.log("Clicked!")}
//         />
//       </center>
//       <center className='no-underline'>
//         <p className='py-2 text-sm text-purple-900 flex justify-center'>
//           Already have an account?
//           <Link
//             to='/login'
//             className='mx-2 text-purple-900 text-sm hover:underline duration-300'
//           >
//             Log In
//           </Link>
//         </p>
//       </center>
//     </form>
//   </div>
// </div>
