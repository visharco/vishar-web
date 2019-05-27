import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';



class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            <div className="get-title-box" >
                                <div className="get-title-up" >
                                    <h1>ویشــــــار </h1>
                                    <h1> طراحان بیدار</h1>
                                </div>
                                <h2 dir="rtl" className="get-title-down" >
                                طراحان ویشار برآن است با توجه به درک و شناخت نیاز سفارش دهنده، بهترین و متنوع ترین طرح ها را در سریعترین زمان ممکن توسط طراحان مجرب کشور بصورت مستقیم به کارفرما ارائه دهد.
                                </h2>
                                <div to="/" className="get-button-box" onClick={this.goto} >
                                    <p className="get-button" >ایجاد حساب کاربری</p>
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