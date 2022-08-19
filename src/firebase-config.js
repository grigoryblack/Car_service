import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAILsXTSvjLTy14TkZ-sEzvDIODAPJOWUY",
    authDomain: "car-app-contin.firebaseapp.com",
    projectId: "car-app-contin",
    storageBucket: "car-app-contin.appspot.com",
    messagingSenderId: "201876091030",
    appId: "1:201876091030:web:af5d75218446979a8fd2b7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);