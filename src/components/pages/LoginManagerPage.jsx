import React from "react";
import './LoginManagerPage.css'
import {useEffect, useState} from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';


function LoginManagerPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

    return (
        <>
            <div className="contaner_login_register">

                <a href="/" className="logo_register_login">
                </a>

                <div className="success_login">{loginStatus}</div>
           
                <div className="form_registration_login">
                    <div className="title_form"> Войдите в аккаунт </div>
                    <label className="title_name_psw"> Ваше имя </label>
                    <input
                        type="text"
                        placeholder="Username..."
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        className="input_register_login"
                    />
                    <label className="title_name_psw"> Пароль </label>
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className="input_register_login"
                    />
                    <Link to="/" onClick={login} className="form_button_login"> Войти </Link>
                    <div className="subtitle_from">Нет аккаунта? <Link to = '/Registration' className = "subtitle_from_link"> Зарегистрируйтесь!</Link></div>
                </div>
            </div>
        </>
    );
}

export default LoginManagerPage;