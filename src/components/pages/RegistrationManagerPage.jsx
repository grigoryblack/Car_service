import React from "react";
import './LoginManagerPage.css'
import { useState } from "react";
import {Link} from 'react-router-dom';

import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebase-config";


function RegistrationManagerPage() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <>

            <div className="contaner_login_register">

                <a href="/" className="logo_register_login">
                </a>

                <div className="form_registration_login">
                    <div className="title_form"> Войдите в аккаунт </div>
                    <label className="title_name_psw"> Ваше имя </label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                        className="input_register_login"
                    />
                    <label className="title_name_psw"> Пароль </label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                        className="input_register_login"
                    />
                    <Link to="/Login" onClick={register} className="form_button_register"> Зарегистрироваться </Link>

                    <div className="subtitle_from">Есть аккаунт? <Link to = '/Login' className = "subtitle_from_link"> Войдите!</Link></div>
                </div>
            </div>
        </>
    );
}

export default RegistrationManagerPage;