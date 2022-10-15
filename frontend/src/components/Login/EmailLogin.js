import React from "react";

const EmailLogin = () => {
  return (
    <div
      className={`bg-cTenebrosa bg-cover bg-center w-screen h-screen text-primaryCatt`}
    >
      <div className={`bg-black/80 w-full h-screen `}>
        <div className={`flex flex-col justify-center h-screen`}>
          <center>
            <h1 className={`text-[30px]`}>Login</h1>
          </center>

          <center>
            <input
              type='text'
              placeholder='Enter Email Address'
              className={`w-96  my-4 p-2 px-3 bg-transparent border-2 border-greenOverlay rounded-lg outline-none focus:border-ltPinkOverlay`}
            />
          </center>

          <center>
            <input
              type='password'
              placeholder='Enter Password'
              className={`w-96 my-4 p-2 px-3 bg-transparent border-2 border-greenOverlay rounded-lg outline-none focus:border-ltPinkOverlay`}
            />
          </center>

          <center>
            <a href='#'>Forgot Password?</a>
          </center>

          <center>
            <a href='#'>Create An Account</a>
          </center>

          <center>
            <button type='submit'>Submit</button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
