import React, { Component } from 'react';

import tik from '../../assets/icons/tik.svg';
import product from '../../assets/images/slide2.png'
import PriceDigit from '../priceDigit/priceDigit';
import AOS from 'aos';


import './style.css';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        AOS.init();

    }
    render() {
        return (
            <div className="product" data-aos="flip-right" onClick={()=> window.open('http://dashboard.ddtarh.ir/dashboard')}>
                <div className="product-img"  >
                    <img src={this.props.data.image} alt="کتگوری ها" />
                </div>
                <div className="product-down" >
                    <div className="product-title" >
                        <div> 
                            <span>تومان</span>
                            <p> {PriceDigit(this.props.data.category_plan[0].price,'price')}</p>
                        </div>
                        <h1>{this.props.data.title}</h1>
                    </div>
                    <div className="product-text" >
                        {this.props.data.desc}
                    </div>
                    {/* <div className="product-options" >
                        <div className="product-option">
                            <p>طراحی لوگو</p>
                            <img src={tik} alt="تیک" />
                        </div>
                        <div className="product-option">
                            <p>کارت تجاری</p>
                            <img src={tik} alt="تیک" />
                        </div>
                        <div className="product-option">
                            <p>سازماندهی</p>
                            <img src={tik} alt="تیک" />
                        </div>
                        <div className="product-option">
                            <p>طرح اولیه</p>
                            <img src={tik} alt="تیک" />
                        </div>
                    </div> */}
                </div>
            </div>

        );
    }
}

export default Product;




/*
=====================================================================================
How can use this button : ------->




=====================================================================================

*/