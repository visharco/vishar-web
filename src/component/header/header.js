import React, { Component } from 'react';
import { Link } from 'react-router';
import Token from '../../api/token';


//
//
//
import logo from './../../assets/images/logo.png'
import './style.css';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openHumberger: false
        }
    }


    menuTablet = React.createRef()

    openHumberger = (e) => {
        this.setState((prevState) => {
            return {
                openHumberger: !prevState.openHumberger
            }
        })
        if (!this.state.openHumberger) {
            this.menuTablet.current.className = 'headerMenuDown'
        } else {
            this.menuTablet.current.className = 'headerMenuUp'

        }
    }


    _callLogin =() => {
        
    }

    render() {

        let line1 = ['line line1']
        let line2 = ['line line2']
        let line3 = ['line line3']
        if (this.state.openHumberger) {
            line1 = ['lineX line1move']
            line2 = ['lineX line2move']
            line3 = ['lineX line3move']
        } else {
            line1 = ['line line1']
            line2 = ['line line2']
            line3 = ['line line3']
        }

        return (
            <div className="header">
                <div className="container-fluid" >
                    <div className="container" >

                        <div className="menuTablet" >
                            <div className="headerMenuUp" ref={this.menuTablet}  >

                            {Token ?   <a href="http://www.dashboard.ddtarh.ir" className="menu-login" onClick={this._callLogin}>
                                    <p className="menu-login-text">حساب کاربری من</p>
                                </a> 
                                : 
                                <a href="http://www.dashboard.ddtarh.ir/login" className="menu-login" onClick={this._callLogin}>
                                <p className="menu-login-text">ثبت نام / ورود</p>
                        </a> 
                    }
                            

                              


                                <ul className="menu-links">
                                    <Link onClick={this.openHumberger} to="/contactUs" ><li className="menu-link">تماس ما</li></Link>
                                    <a href="http://www.blog.ddtarh.ir"  ><li className="menu-link">بلاگ</li></a>
                                    <Link onClick={this.openHumberger} to="/aboutUs" ><li className="menu-link">درباره ما</li></Link>
                                    <Link onClick={this.openHumberger} to="/projects" ><li className="menu-link">پروژه ها</li></Link>
                                    <Link onClick={this.openHumberger} to="/designers" ><li className="menu-link">طراحان</li></Link>
                                    <Link onClick={this.openHumberger} to="/categories" ><li className="menu-link">دسته بندی</li></Link>
                                </ul>
                            </div>
                            

                            <div className="hamburger" onClick={(e) => this.openHumberger(e)} ref={this.humberger}>
                                <span className={line1.join(' ')}></span>
                                <span className={line2.join(' ')} ></span>
                                <span className={line3.join(' ')} ></span>
                            </div>
                            <div className="header-logo" >
                                <Link to="/" ><img src={logo} alt="لوگو" style={{height:'72px', zIndex:9999}} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;