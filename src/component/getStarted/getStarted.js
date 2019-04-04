import React, { Component } from 'react';
import getStarted from './../../assets/images/getStarted.png'
import './style.css';


class GetStartedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="getStarted">
                <div className="container-fluid" >
                    <div className="container">
                        <div className="getStarted-text" >
                            <div className="getStartedi-title" >
                                <h1>  ،بهترین طراحان </h1>
                                <h1>بهترین طرح </h1>
                                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</h2>
                            </div>
                        </div>
                        <div className="getStarted-button" >
                            <p className="" >شروع</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetStartedComponent;