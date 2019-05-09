
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from './../../../assets/images/image1.png'
import image2 from './../../../assets/images/image2.png'
import image3 from './../../../assets/images/image3.png'

import './style.css';



class SampleDesigns extends Component {
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
            <div className="sampleDesigns" >
                <div className="container-fluid">
                    <div className="container">
                    <h1>پروژه های انجام شده</h1>
                    <div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image1 + ')'  }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image2 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image3 + ')'}} >
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image1 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image2 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image3 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image3 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image2 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + image1 + ')'}} >
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SampleDesigns;