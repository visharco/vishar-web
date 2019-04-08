import React, { Component } from 'react';

import categorytitle from '../../assets/images/categorytitle.svg'
import search from '../../assets/icons/search.svg'

import Product from '../../component/product/product'

import './style.css';


class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="categories" >
                <div className="C-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={categorytitle} />
                            <div className="C-title-right">
                                <h1>دسته بندی های ما</h1>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="C-search" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="C-search-box " >
                                <input type="text" />
                                <img src={search} />
                            </div>
                            <div className="C-search-wrap" >
                                <div className="C-search-result " >
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    
                                </div>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CategoriesComponent;