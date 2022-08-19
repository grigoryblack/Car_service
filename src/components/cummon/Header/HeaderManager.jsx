import React, {useEffect} from "react";
import './HeaderManager.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import { Navigate } from 'react-router-dom';


function HeaderManager() {

    const logout = async () => {
        await signOut(auth);
    };

    const [user, setUser] = useState({});

    useEffect(()=>{
        return onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    })

    const [isActive, setIsActive] = useState(false);

    return user? (
        <>
            <div className="header">
                <div className="left_line"></div>
                <Link to="/Manager"> <div className="logo"> </div></Link>
                <div className="right_line"></div>
                <div className="main_nav_table">
                    <div className="dropdown_order order_style" onClick={(e) => setIsActive(!isActive)}>Личный кабинет
                        {isActive && (
                            <div className="order_contaner_table">
                                <div className="subtitle_order_table">Имя: {user?.email} </div>
                                <button className="exit_button_table" onClick={logout}> Выход </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="right_line_end"></div>

            </div>
        </>
    ): (
        <Navigate to="/Login"/>
    )

}

export default HeaderManager;