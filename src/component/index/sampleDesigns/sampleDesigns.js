
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img01 from './../../../assets/images/work-sample/01.png' 
import img02 from './../../../assets/images/work-sample/02.png' 
import img03 from './../../../assets/images/work-sample/03.png' 
import img04 from './../../../assets/images/work-sample/04.png' 
import img05 from './../../../assets/images/work-sample/05.png' 
import img06 from './../../../assets/images/work-sample/06.png' 

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
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + img01 + ')'  }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + img02 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + img03 + ')'}} >
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + img04 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + img05 + ')'}} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div className="sampleDesigns-slider" style={{ backgroundImage: 'url(' + img06 + ')'}} >
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