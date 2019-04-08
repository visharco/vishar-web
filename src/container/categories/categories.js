import React, { Component } from 'react';

import categorytitle from '../../assets/images/categorytitle.svg'
import categories from '../../assets/images/categories.png'


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
                {/* <div className="C-search" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="C-search-box " >
                                <input type="text" />
                                <img src={search} />
                            </div>
                            <div className="C-search-wrap" >
                                <div className="C-search-result " >
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                        click={this.gotoDesigner}
                                    />
                                    
                                </div>
                                <div className="C-search-pagination" >
                                    <p className="pagination-number">1</p>
                                    <p className="pagination-number">2</p>
                                    <p className="pagination-number pagination-number-selected">3</p>
                                    <p className="pagination-number">4</p>
                                    <p className="pagination-number">5</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
            </div>

        );
    }
}

export default CategoriesComponent;