import React from "react";
import './HeaderManager.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";



function HeaderManager() {
    const [isActive, setIsActive] = useState(false)

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
                                <div className="subtitle_order_table">Имя:  </div>
                                <button className="exit_button_table"><a href="/" className=""> Выход </a></button>
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