import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBw1gIK8rRhE3SnmnfddHWyDiFWQmNoT0A",
  authDomain: "nmk-flashshop.firebaseapp.com",
  projectId: "nmk-flashshop",
  storageBucket: "nmk-flashshop.appspot.com",
  messagingSenderId: "42506763459",
  appId: "1:42506763459:web:242ebe2b01ddff85917676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;