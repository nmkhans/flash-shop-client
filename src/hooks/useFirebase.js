import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile  } from "firebase/auth";
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


    //? register user with email and password
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

    return {
        user,
        registerUser,
    };
};

export default useFirebase;