import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';
import AOS from 'aos';



class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        AOS.init();

    }

    goto = () => {
        window.location = 'http://dashboard.vishar.com/'
    }

    
    render() {
        return (
            <div className="getStarted" >
                <div className="container-fluid">
                    <div className="container">
                        <div className="get-title">
                            <div className="get-title-box"  data-aos="fade-up"  >
                                <div className="get-title-up "  > 
                                    <h2> ویشار، طراحان همیشه بیدار</h2>
                                </div>
                                <h2 dir="rtl" className="get-title-down" >
                                ویشار بستریست که طراحان مجرب سراسر کشور را به مشتریان و کارفرمایان متصل می کند. درک دقیق نیاز سفارش دهنده، کیفیت، تنوع طرح ها و سرعت تحویل پروژه از ویژگی های بارز ویشار می باشد.
                                </h2>
                                <div to="/" className="get-button-box" onClick={this.goto} >
                                    <p className="get-button" data-aos="flip-right">ایجاد حساب کاربری</p>
                                </div>
                            </div>
                     
                        </div>
                     
                    </div>
                </div>
            </div>
        );
    }
}

export default GetStarted;