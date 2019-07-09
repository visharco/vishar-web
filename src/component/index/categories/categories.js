import React, { Component } from 'react';
import {Link, browserHistory } from 'react-router'
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
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2500,
            slidesToShow: 3,
            slidesToScroll: 1,  
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        const renderCategory = (
            this.state.category ? this.state.category.map((data,index) => {
                    return   <div key={index} className="show-my-category" onClick={()=> browserHistory.push('/categories')}>
                                <div className="category-slider" style={{ backgroundImage: 'url(' + data.image + ')' }} >
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
                            <div className="cat-part1-text"  data-aos="fade-up">
                                <h1>دسته بندی های ویشار</h1>
                                <h2>
                                طراحان ویشار، پروژه های مختلفی را در زمینه هایی چون طراحی لوگو، ست اداری، بنر، طراحی کارت ویزیت، بروشور و... طراحی و تحویل مشتری می دهند. دسته بندی های ما طیف گسترده ای از نیازهای شما را برآورده خواهند کرد. پس با ما همراه باشید.
                                </h2>
                                
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