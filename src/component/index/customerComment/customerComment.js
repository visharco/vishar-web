
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import customer1 from './../../../assets/images/customer1.png'
import img01 from './../../../assets/images/comment/01.jpeg'
import img02 from './../../../assets/images/comment/02.jpeg'
import img03 from './../../../assets/images/comment/03.jpeg'
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
            autoplay: true,
            speed: 500,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,

        }
        return (
            <div className="customerComment" >
                <div className="container-fluid">
                    <div className="container">
                    <h1> نظرات برخی از مشتریان ویشار </h1>
                        <div>
                            
                            <Slider {...settings}>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <div className="customer-title  " >
                                            <h1> سارا مومنی </h1>
                                            <h2>مدیر کسب و کارهای اینترنتی</h2>
                                        </div>
                                        <img src={img01} alt="نظرات" />
                                    </div>
                                    <p className="customer-text">
                                        همکاری با ویشار بسیار ساده و لذت بخش بوده، چراکه با توجه به امنیت و سرعت در سرویس دهی مرا در دستیابی به طرح دلخواه خود یاری نمودند
                                    </p>
                                </div>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <div className="customer-title  ">
                                            <h1>مهدی حسینیان</h1>
                                            <h2>UI/UX طراح </h2>
                                        </div>
                                        <img src={img02} alt="نظرات" />
                                    </div>
                                    <p className="customer-text">
                                    بیش از 5 سال است که در زمینه طراحی رابط کاربری و تجربه کاربری فعالیت دارم ، ویشار به راحتی پاسخگوی نیازهای من بوده و با اطمینان می توانم مشتریان خود را بیابم
                                    </p>
                                </div>
                                <div className="customer-box" >
                                    <div className="customer-detail">
                                        <div className="customer-title  " >
                                            <h1>شراره دشتی</h1>
                                            <h2>طراحی رابط گرافیک </h2>
                                        </div>
                                        <img src={img03} alt="نظرات" />
                                    </div>
                                    <p className="customer-text">
                                   امروزه کار کردن در عرصه اینترنت بسیار دشوار شده ، با وجود ویشار به راحتی می توانم در هر کجا که هستم مشتریان خود را بیابم .
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