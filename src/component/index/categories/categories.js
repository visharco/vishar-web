import React, { Component } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from './../../../assets/images/slide1.png'
import slide2 from './../../../assets/images/slide2.png'
import slide3 from './../../../assets/images/slide3.png'


import './style.css';
import { relative } from 'path';



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
            // autoplay: true,
            // speed: 5000,
            // autoplaySpeed: 200,
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
                                        <div style={{ backgroundImage: 'url(' + slide1 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide3 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >business cards</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide2 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide1 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide3 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide2 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide2 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide3 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + slide1 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '200px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                            <p className="cat-label" >logo</p>
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