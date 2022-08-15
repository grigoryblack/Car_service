import React from "react";
import './MainPage.css';
import Header from "../cummon/Header/Header";
import Footer from "../cummon/Footer/Footer";
import { Link } from "react-router-dom"

function MainPage() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="banner">
                    <div className="banner_text_display">
                        <div className="banner_text">
                            Быстрая запись
                            <br></br>на удобное время
                            <br></br>по доступным ценам
                        </div>
                    </div>
                    <div className="buttons_display">
                        <Link to="/Order" className="link_fix">
                            <div className="sign_button">
                                <div className="sign_text">Записаться</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainPage;