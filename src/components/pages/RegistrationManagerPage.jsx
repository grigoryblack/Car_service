import React from "react";
import './LoginManagerPage.css'
import { useState } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';


function RegistrationManagerPage() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
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
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}
                        className="input_register_login"
                    />
                    <label className="title_name_psw"> Пароль </label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
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