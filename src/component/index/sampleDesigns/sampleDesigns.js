
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
            // autoplay: true,
            // speed: 5000,
            // autoplaySpeed: 200,
        };
        return (
            <div className="sampleDesigns" >
                <div className="container-fluid">
                    <div className="container">
                    <h1>طرح های نمونه برا پروژه</h1>
                    <div>
                                <Slider {...settings}>
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image1 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image2 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image3 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image1 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image2 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image3 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image3 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image2 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
                                        </div>
                                        
                                    </div>
                                    
                                    <div>
                                        <div style={{ backgroundImage: 'url(' + image1 + ')', backgroundPosition: 'center', backgroundSize: 'contain',backgroundRepeat:'no-repeat', width: '300px', height: '300px', cursor: 'zoom-in' , margin:'auto' ,position:'relative' }} >
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