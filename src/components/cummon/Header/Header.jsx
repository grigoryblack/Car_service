import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <div className="header_user">
                <div className="left_line_user"></div>
                <Link to = "/"> <div className="logo_user"> </div></Link>
                <div className="right_line_user"></div>
            </div>
        </>
    )
}

export default Header;