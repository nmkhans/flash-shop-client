import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
                toast('Registration successfull')
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