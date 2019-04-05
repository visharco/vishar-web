
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import customer1 from './../../../assets/images/customer1.png'

import './style.css';



class CustomerComment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="customerComment" >
                <div className="container-fluid">
                    <div className="container">
                    <h1>  Customer Comments</h1>
                        <div>
                            
                            <Slider {...settings}>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <img src={customer1} alt="نظرات" />
                                        <div className="customer-title  " >
                                            <h1>Omid Rahmani</h1>
                                            <h2>CEO of Appel</h2>
                                        </div>
                                    </div>
                                    <p className="customer-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    </p>
                                </div>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <img src={customer1} alt="نظرات" />
                                        <div className="customer-title  " >
                                            <h1>Omid Rahmani</h1>
                                            <h2>CEO of Appel</h2>
                                        </div>
                                    </div>
                                    <p className="customer-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    </p>
                                </div>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <img src={customer1} alt="نظرات" />
                                        <div className="customer-title  " >
                                            <h1>Omid Rahmani</h1>
                                            <h2>CEO of Appel</h2>
                                        </div>
                                    </div>
                                    <p className="customer-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    </p>
                                </div>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <img src={customer1} alt="نظرات" />
                                        <div className="customer-title  " >
                                            <h1>Omid Rahmani</h1>
                                            <h2>CEO of Appel</h2>
                                        </div>
                                    </div>
                                    <p className="customer-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    </p>
                                </div>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <img src={customer1} alt="نظرات" />
                                        <div className="customer-title  " >
                                            <h1>Omid Rahmani</h1>
                                            <h2>CEO of Appel</h2>
                                        </div>
                                    </div>
                                    <p className="customer-text">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerComment;