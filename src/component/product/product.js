import React, { Component } from 'react';

import tik from '../../assets/icons/tik.svg';
import product from '../../assets/images/slide2.png'


import './style.css';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="product">
                <div className="product-img" style={{
                    backgroundImage: 'url(' + product + ')',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '300px'
                }} >


                </div>
                <div className="product-down" >
                    <div className="product-title" >
                        <div> 
                            <span>تومان</span>
                            <p>300000</p> 
                        </div>
                        <h1>طراحی لوگو</h1>
                    </div>
                    <div className="product-text" >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </div>
                    <div className="product-options" >
                        <div className="product-option">
                            <p>طراحی لوگو</p>
                            <img src={tik} />
                        </div>
                        <div className="product-option">
                            <p>کارت تجاری</p>
                            <img src={tik} />
                        </div>
                        <div className="product-option">
                            <p>سازماندهی</p>
                            <img src={tik} />
                        </div>
                        <div className="product-option">
                            <p>طرح اولیه</p>
                            <img src={tik} />
                        </div>
                    </div>
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