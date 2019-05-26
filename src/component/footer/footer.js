import React, {Component} from 'react';

import facebook from './../../assets/icons/facebook.svg'
import twitter from './../../assets/icons/twitter.svg'
import instagram from './../../assets/icons/instagram.svg'
import telegram from './../../assets/icons/telegram.svg'
import '../../../node_modules/sweetalert/dist/sweetalert.css'
import './style.css';
import SweetAlert from "sweetalert-react";
import PostToApi from "../../controler/postToApi";


class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailFooter: ''
        }
    }

    //
    // get data from input by event target -------------------------------------------------------------->
    //
    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //
    // ----------------------------------------------------------------------------------------------------
    _submitEmail = async () => {
        const data = new FormData();
        data.append('email', this.state.emailFooter)
        const res = await PostToApi(data, 'site/newsletters' );
        if (res.status === 200) {
            this.setState({
                alertText: 'کاربر گرامی اطلاعات با موفقیت ثبت شد.',
                show: true,
                emailFooter: '',
            });
        } else
            this.setState({
                alertText: res.error,
                show: true
            });
    }

    //
    //
    _goto = (val) => {
        window.location.pathname = val;

    }

    render() {
        return (
            <div className="footer">
                <SweetAlert
                    show={this.state.show}
                    title="اعلان"
                    text={this.state.alertText}
                    onConfirm={() => this.setState({show: false})}
                />
                <div className="container">
                    <div className="footer-split ">
                        <h1>عضویت در خبرنامه</h1>
                        <div className="footer-newslater">
                            <div className="newslater-container">
                                <input className="footer-newslater-input-container" name="emailFooter"
                                       value={this.state.emailFooter} onChange={this.changedHandler}
                                       placeholder="ایمیل"/>


                                <div className="footer-newslater-button-container" onClick={this._submitEmail}>
                                    <p>عضویت</p>
                                </div>
                            </div>
                            <div className="footer-social-network">
                                <div>
                                    <a className="F-SN" href="http://www.facebook.com">
                                        <img className="footer-social" src={facebook} alt="فیسبوک"/>
                                    </a>

                                </div>
                                <div>
                                    <a className="F-SN" href="http://www.twitter.com">
                                        <img className="footer-social" src={twitter} alt="توویتر"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="F-SN" href="http://www.instagram.com">
                                        <img className="footer-social" src={instagram} alt="اینستاگرام"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="F-SN" href="http://www.telegram.com">
                                        <img className="footer-social" src={telegram} alt="تلگرام"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-split ">
                        <h1>منوها</h1>
                        <div className="footer-menu">
                            <ul>
                                <li onClick={() => this._goto('/aboutus')}>درباره ما</li>
                                <li onClick={() => window.location = "http://www.blog.vishar.com/"}>بلاگ</li>
                                <li onClick={() => this._goto('/contactUs')}>تماس باما</li>
                            </ul>
                            <ul>
                                <li onClick={() => this._goto('/categories')}>دسته بندی ها</li>
                                <li onClick={() => this._goto('/designers')}>طراحان</li>
                                <li onClick={() => this._goto('/projects')}>پروژه ها</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FooterComponent;