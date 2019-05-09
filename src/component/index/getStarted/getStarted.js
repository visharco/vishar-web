import React, { Component } from 'react';

import './style.css';



class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            </div>
                        </div>
                        <div className="get-button-box" >
                            <p className="get-button" >ایجاد حساب کاربری</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetStarted;