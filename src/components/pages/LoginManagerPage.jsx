import React from "react";
import './LoginManagerPage.css'
import { useState,useEffect} from "react";
import {Link, Navigate} from 'react-router-dom';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";



function LoginManagerPage() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(()=>{
        return onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    })

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return user?(
        <Navigate to="/Manager"/>
    ) : (
        <>
            <div className="contaner_login_register">

                <a href="/" className="logo_register_login">
                </a>

                <div className="success_login"></div>
           
                <div className="form_registration_login">
                    <div className="title_form"> Войдите в аккаунт </div>
                    <label className="title_name_psw"> Ваше имя </label>
                    <input
                        type="text"
                        placeholder="Username..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                        className="input_register_login"
                    />
                    <label className="title_name_psw"> Пароль </label>
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                        className="input_register_login"
                    />
                    <Link to="/Manager" onClick={login} className="form_button_login"> Войти </Link>
                    <div className="subtitle_from">Нет аккаунта? <Link to = '/Registration' className = "subtitle_from_link"> Зарегистрируйтесь!</Link></div>
                </div>
            </div>
        </>
    );
}

export default LoginManagerPage;