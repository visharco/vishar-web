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
                                    <h1>   ، بهترین طراحان </h1>
                                    <h1>بهترین طرح</h1>
                                </div>
                                <h2 className="get-title-down" >
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
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