// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName
            const email = result.user.email
            const profilePic = result.user.photoURL

            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('profilePic', profilePic)
        }).catch((error) => {
            alert(error)
    })
}

export const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider()

    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName
            const email = result.user.email
            const profilePic = result.user.photoURL

            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('profilePic', profilePic)
        }).catch((error) => {
            alert(error)
    })
}

export default app