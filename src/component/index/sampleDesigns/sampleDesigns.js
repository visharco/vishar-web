import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img01 from './../../../assets/images/work-sample/01.png'
import img02 from './../../../assets/images/work-sample/02.png'
import img03 from './../../../assets/images/work-sample/03.png'
import img04 from './../../../assets/images/work-sample/04.png'
import img05 from './../../../assets/images/work-sample/05.png'
import img06 from './../../../assets/images/work-sample/06.png'


import brandImg01 from './../../../assets/images/brand/01.png'
import brandImg02 from './../../../assets/images/brand/02.png'
import brandImg03 from './../../../assets/images/brand/03.png'
import brandImg04 from './../../../assets/images/brand/04.png'
import brandImg05 from './../../../assets/images/brand/05.png'
import brandImg06 from './../../../assets/images/brand/06.png'
import brandImg07 from './../../../assets/images/brand/07.png'
import brandImg08 from './../../../assets/images/brand/08.png'
import brandImg09 from './../../../assets/images/brand/09.png'
import brandImg10 from './../../../assets/images/brand/10.png'
import brandImg11 from './../../../assets/images/brand/11.png'
import brandImg12 from './../../../assets/images/brand/12.png'
import brandImg13 from './../../../assets/images/brand/13.png'
import brandImg14 from './../../../assets/images/brand/14.png'
import brandImg15 from './../../../assets/images/brand/15.png'
import brandImg16 from './../../../assets/images/brand/16.png'
import brandImg17 from './../../../assets/images/brand/17.png'
import brandImg18 from './../../../assets/images/brand/18.png'
import brandImg19 from './../../../assets/images/brand/19.png'
import brandImg20 from './../../../assets/images/brand/20.png'
import brandImg21 from './../../../assets/images/brand/21.png'
import brandImg22 from './../../../assets/images/brand/22.png'
import brandImg23 from './../../../assets/images/brand/23.png'
import brandImg24 from './../../../assets/images/brand/24.png'
import brandImg25 from './../../../assets/images/brand/25.png'


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
            autoplay: true,
            speed: 500,
            autoplaySpeed: 1000,
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
        const settings2 = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 500,
            slidesToShow: 7,
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
            <div>
                <div className="sampleDesigns">
                    <div className="container-fluid">
                        <div className="container">
                            <h1>پروژه های انجام شده</h1>
                            <div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="sampleDesigns-slider"
                                             style={{backgroundImage: 'url(' + img01 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider"
                                             style={{backgroundImage: 'url(' + img02 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider"
                                             style={{backgroundImage: 'url(' + img03 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider"
                                             style={{backgroundImage: 'url(' + img04 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider"
                                             style={{backgroundImage: 'url(' + img05 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider"
                                             style={{backgroundImage: 'url(' + img06 + ')'}}>
                                        </div>

                                    </div>


                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sampleDesigns bg-fff">
                    <div className="container-fluid">
                        <div className="container">
                            <h1>همکاران تجاری ویشار </h1>
                            <div>
                                <Slider {...settings2}>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg01 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg02 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg03 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg04 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg05 + ')'}}>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg06 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg07 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg08 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg09 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg10 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg11 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg12 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg13 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg14 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg15 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg16 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg17 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg18 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg19 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg20 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg21 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg22 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg23 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg24 + ')'}}>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="sampleDesigns-slider brand"
                                             style={{backgroundImage: 'url(' + brandImg25 + ')'}}>
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

export default SampleDesigns;