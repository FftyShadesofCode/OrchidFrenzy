import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'

import Registration from './Registration'

const Login = () => {
    const [ profile, setProfile ] = useState([])
    const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }
        gapi.load('client:auth2', initClient)
    })

    const onSuccess = (res) => {
        setProfile(res.profileObj)
    }

    const onFailure = (err) => {
        setProfile('failed:', err)
    }

    const logout = () => {
        setProfile(null)
    }

    return (
        <div className={`bg-cTenebrosa bg-cover bg-center w-screen h-screen text-primaryCatt`}>
            <div className={`bg-black/80 w-full h-screen `}>

                <div className={`flex flex-col justify-center items-center h-screen`}>

                    <form action='submit' className={`space-y-5 border-2 border-ltPinkOverlay shadow-md shadow-[0_0_15px_10px_rgba(0,128,0,0.5)] w-fit p-8 rounded-lg`}>
                        <center>
                            <h1 className={`text-[50px]`}>Login</h1>
                        </center>

                        <center>
                            <input type='text' placeholder='Enter Email Address' className={`w-96 p-2 px-3 bg-transparent border-2 border-greenOverlay rounded-lg outline-none focus:border-ltPinkOverlay`} required />
                        </center>

                        <center>
                            <input type='password' placeholder='Enter Password' className={`w-96 p-2 px-3 bg-transparent border-2 border-greenOverlay rounded-lg outline-none focus:border-ltPinkOverlay`} required />
                        </center>

                        <center className={`no-underline`}>
                            <Link to='' className={`mx-4 text-primaryCatt hover:text-primarySeedlingGreen duration-300`}>Forgot Password?</Link>

                            <Link to={Registration} className={`mx-4 text-primaryCatt hover:text-primarySeedlingGreen duration-300`}>Create an Account</Link>
                        </center>

                        <center className={`my-6`}>
                            <button type='submit' className={`text-[24px] border-primaryLtPink border-2 bg-primaryDeepPink px-4 py-2 rounded-md hover:border-primaryDeepPink hover:bg-primaryLtPink hover:text-black duration-300`}>Submit</button>
                        </center>
                    </form>

                    <div className={`flex justify-center mt-10`}>

                        <GoogleLogin
                            clientId={clientId}
                            buttonText='Sign in with Google'
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            className={`h-14 w-52 flex justify-center items-center`}
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login