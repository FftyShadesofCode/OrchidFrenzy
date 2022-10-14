import React, { useState, useEffect } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'

export default function Login() {
    const [ profile, setProfile ] = useState([])
    const clientId = '378677610801-d04oge73a9rrlro62hgb0ut3jghohamo.apps.googleusercontent.com'

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
        console.log('failed:', err)
    }

    const logout = () => {
        setProfile(null)
    }

    return (
        <div>
            <h2>Login</h2>
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt='user avatar' />
                    <h3>User Logged In</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>

                    <GoogleLogout clientId={clientId} buttonText='Log Out' onLogoutSuccess={logout} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText='Sign in with Google'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
};