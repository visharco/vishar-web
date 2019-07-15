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
    _openEnamad = () => {
        // window.open('https://trustseal.enamad.ir/Verify.aspx?id=126862&amp;p=pgWlS6pCVix54VAI&quot',' toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')
        window.open('https://trustseal.enamad.ir/Verify.aspx?id=126862&amp;p=QLc1X4NC0uwIknYj&quot&quot','Popup&quot&quot','toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot')    }
        // window.open('http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=javascript:fbShare("http://jsfiddle.net/stichoza/EYxTJ/")&p[images][0]="http://goo.gl/dS52U"', 'sharer', 'toolbar=0,status=0,width=548,height=325');


    render() {
        const enamad = (   <img 
            src="https://trustseal.enamad.ir/logo.aspx?id=126862&amp;p=pgWlS6pCVix54VAI" 
            alt="" 
            onClick={this._openEnamad}
            id="pgWlS6pCVix54VAI"    />
        )
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
                    <div class="enamad" id="pgWlS6pCVix54VAI" onClick={this._openEnamad}>
                        {enamad}
                    </div>
                    <div className="footer-split ">
                        <h1>منوها</h1>
                        <div className="footer-menu">
                            <ul>
                                <li onClick={() => this._goto('/aboutus')}>درباره ما</li>
                                <li onClick={() => window.location = "http://www.blog.vishar.com/"}>بلاگ</li>
                                <li onClick={() => this._goto('/contactUs')}>تماس باما</li>
                                <li onClick={() => this._goto('/policy')}>قوانین و مقررات</li>

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