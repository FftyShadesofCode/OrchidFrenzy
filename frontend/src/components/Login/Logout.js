import React from 'react'

import { GoogleLogout } from 'react-google-login'

export default function Logout() {

    const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN

    const onSuccess = () => {
        console.log('Log out successful!')
    }

    return (
        <div>
            <div>
                <GoogleLogout
                    clientId={clientId}
                    buttonText={'Logout'}
                    onLogoutSuccess={onSuccess}
                />
            </div>
        </div>
    )
}