
import React, { Component } from 'react';

import './style.css';



class HowWorking extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="howWorking" >
                <div className="container-fluid">
                    <div className="container">
                        <h1>ویشار چگونه کار میکند ؟</h1>
                        <div className="how-right">
                            <div className="how-text" >
                                <h1>
                                    حساب کاربریت رو بساز
                            </h1>
                                <p >
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                           </p>
                            </div>
                            <h1 className="how-num">
                                1
                           </h1>
                        </div>

                        <div className="how-left">
                            <div className="how-text" >
                                <h1>
                                    پروژه خودت رو بساز
                                </h1>
                                <p >
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                           </p>
                            </div>
                            <h1 className="how-num">
                                2
                           </h1>
                        </div>

                        <div className="how-right">
                            <div className="how-text" >
                                <h1>
                                    بهترین طرحت رو انتخاب کن
                                </h1>
                                <p >
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                           </p>
                            </div>
                            <h1 className="how-num">
                                3
                           </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowWorking;