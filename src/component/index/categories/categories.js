import React, { Component } from 'react';
import {Link } from 'react-router'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from './../../../assets/images/slide1.png'
import slide2 from './../../../assets/images/slide2.png'
import slide3 from './../../../assets/images/slide3.png'
import GetToAPI from '../../../controler/getToApi';


import './style.css';




class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:[]
        }
    }

    componentWillMount = async() => {

        const res = await GetToAPI('site/category');

        this.setState({
            category: res.data
        })
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

        const renderCategory = (
            this.state.category ? this.state.category.map((data,index) => {
                    return   <div key={index}>
                                <div className="category-slider" style={{ backgroundImage: 'url(' + data.icon + ')' }} >
                                    <p className="cat-label" >{data.title}</p>
                                </div>
                            </div>
            }) : ''
        )



        return (
            <div className="categories" >
                <div className="container-fluid">
                    <div className="container">
                        <div className="cat-part1" >
                        <Link to="/categories" className="cat-part1-action" >
                            <p>نمایش همه  ی دسته بندیهای  </p>
                        </Link>
                            <div className="cat-part1-text" >
                                <h1>دسته بندیهای ما </h1>
                                <h2>چالش طراحان ویشار در پی طرح های مورد نیاز شما</h2>
                            </div>
                        </div>
                        <div className="cat-slider" >
                            <div>
                                <Slider {...settings}>
                                   
                                    {renderCategory}
                                  

                                   
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