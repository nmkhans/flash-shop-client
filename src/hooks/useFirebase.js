import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate()

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
                navigate('/');
            })
    }

    //? Login user with email and password
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate('/');
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
        handleSignOut,
    };
};

export default useFirebase;