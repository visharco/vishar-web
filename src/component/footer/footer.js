import React, { Component } from 'react';

import facebook from './../../assets/icons/facebook.svg'
import twitter from './../../assets/icons/twitter.svg'
import instagram from './../../assets/icons/instagram.svg'
import telegram from './../../assets/icons/telegram.svg'

import './style.css';


class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-split ">
                        <h1>عضویت در خبرنامه</h1>
                        <div className="footer-newslater">
                            <div className="newslater-container">
                                <input className="footer-newslater-input-container" placeholder="ایمیل" />


                                <div className="footer-newslater-button-container">
                                    <p>عضویت</p>
                                </div>
                            </div>
                            <div className="footer-social-network">
                                <div>
                                    <a href="http://www.facebook.com" >
                                        <img className="footer-social" src={facebook} alt="فیسبوک" />
                                    </a>

                                </div>
                                <div>
                                    <a href="http://www.twitter.com" >
                                        <img className="footer-social" src={twitter} alt="توویتر" />
                                    </a>
                                </div>
                                <div>
                                    <a href="http://www.instagram.com" >
                                        <img className="footer-social" src={instagram} alt="اینستاگرام" />
                                    </a>
                                </div>
                                <div>
                                    <a href="http://www.telegram.com" >
                                        <img className="footer-social" src={telegram} alt="تلگرام" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-split ">
                        <h1>منوها</h1>
                        <div className="footer-menu">
                            <ul>
                                <li>درباره ما</li>
                                <li>بلاگ</li>
                                <li>تماس باما</li>
                            </ul>
                            <ul>
                                <li>گتگوری ها</li>
                                <li>طراحان</li>
                                <li>پروژه ها</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FooterComponent;