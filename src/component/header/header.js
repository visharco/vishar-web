import React, { Component } from 'react';
import {Link } from 'react-router';

//
//
//
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
                                <Link to="/contactUs" ><li className="menu-link">تماس ما</li></Link>
                                <Link to="/blog" ><li className="menu-link">بلاگ</li></Link>
                                <Link to="/aboutUs" ><li className="menu-link">درباره ما</li></Link>
                                <Link to="/projects" ><li className="menu-link">پروژه ها</li></Link>
                                <Link to="/designers" ><li className="menu-link">طراحان</li></Link>
                                <Link to="/categories" ><li className="menu-link">دسته بندی</li></Link>
                            </ul>
                        </div>
                        <div className="header-logo" >
                        <Link to="/" ><img src={logo} alt="لوگو" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;