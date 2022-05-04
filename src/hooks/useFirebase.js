import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";
import auth from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    //? Observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    //? Register user with email and password
    const registerUser = (name, img, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: img,
                });
                sendEmailVerification(auth.currentUser)
                toast('Registration successfull')
                setTimeout(() => {
                    toast('Verification mail send')
                }, 2000);
                navigate(from, { replace: true });
            })
    }

    //? Login user with email and password
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast('Login Successfull')
                navigate(from, { replace: true });
            })
            .catch(error => {
                if(error.message === 'Firebase: Error (auth/invalid-email).') {
                    toast('Invalid Email')
                } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    toast("User Doesn't exist");
                } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    toast("Password is Wrong");
                }else if (error.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
                    toast("Your account is Disabled for too many failed attempt. Reset password or try again laiter.");
                }
            })
    }

    //? Login user with Google
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast('Login Successfull')
                navigate(from, { replace: true });
            })
    }

    //? SignOut user
    const handleSignOut = () => {
        signOut(auth);
    }

    return {
        user,
        registerUser,
        loginUser,
        googleSignIn,
        handleSignOut,
    };
};

export default useFirebase;