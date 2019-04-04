import React, { Component } from 'react';
import logo from './../../assets/images/logo.png'
import './style.css';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <div className="container-fluid" >
                    <div className="container" >
                        <div className="header-menu" >
                            <div className="menu-login" >
                                <p className="menu-login-text">ثبت نام / ورود</p>
                            </div>
                            <ul className="menu-links">
                                <li className="menu-link">دسته بندی</li>
                                <li className="menu-link">طراحان</li>
                                <li className="menu-link">پروژه ها</li>
                                <li className="menu-link">درباره ما</li>
                                <li className="menu-link">بلاگ</li>
                            </ul>
                        </div>
                        <div className="header-logo" >
                            <img src={logo} alt="لوگو" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;