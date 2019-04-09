import React, { Component } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from './../../../assets/images/slide1.png'
import slide2 from './../../../assets/images/slide2.png'
import slide3 from './../../../assets/images/slide3.png'


import './style.css';




class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="categories" >
                <div className="container-fluid">
                    <div className="container">
                        <div className="cat-part1" >
                            <div className="cat-part1-action" >
                                <p>دیدن همه  ی دسته بندیهای طرح ها</p>
                            </div>
                            <div className="cat-part1-text" >
                                <h1>دسته بندیهای ما </h1>
                                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
                            </div>

                        </div>
                        <div className="cat-slider" >
                            <div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide1 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide3 + ')' }} >
                                            <p className="cat-label" >کارت تجاری</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide2 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide1 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide3 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide2 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide2 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide3 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="category-slider" style={{ backgroundImage: 'url(' + slide1 + ')' }} >
                                            <p className="cat-label" >لوگو</p>
                                        </div>

                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;