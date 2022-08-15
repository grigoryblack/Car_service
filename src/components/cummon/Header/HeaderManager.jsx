import React from "react";
import './HeaderManager.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react";
import Axios from "axios";
import  { useNavigate }  from 'react-router-dom';



function HeaderManager() {
    const [isActive, setIsActive] = useState(false);
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

    Axios.defaults.withCredentials = true;

    function LogOut(){
        navigate('/');
    }

    return (
        <>
            <div className="header">
                <div className="left_line"></div>
                <Link to="/Manager"> <div className="logo"> </div></Link>
                <div className="right_line"></div>
                <div className="main_nav_table">
                    <div className="dropdown_order order_style" onClick={(e) => setIsActive(!isActive)}>Личный кабинет
                        {isActive && (
                            <div className="order_contaner_table">
                                <div className="subtitle_order_table">Имя: {loginStatus} </div>
                                <button className="exit_button_table" onClick={LogOut}> Выход </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="right_line_end"></div>
            </div>
        </>
    )

}

export default HeaderManager;