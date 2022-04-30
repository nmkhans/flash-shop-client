import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});

    //? Observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    //? register user with email and password
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
    }

    return {
        user,
        registerUser,
    };
};

export default useFirebase;