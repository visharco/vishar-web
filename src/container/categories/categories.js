import React, { Component } from 'react';

import categorytitle from '../../assets/images/categorytitle.svg'
import search from '../../assets/icons/search.svg'

import Product from '../../component/product/product'

import './style.css';
import GetApi from '../../controler/getToApi';





class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:[]
        }
    }

    componentWillMount = async() => {

        const res = await GetApi('site/category');
        await this.setState({
            category:res.data
        })
    }
    render() {

        const renderCategory = (
            this.state.category ? this.state.category.map((data,index) => {
                return  <Product data={data} />
            }) : ''
        )
        return (

            <div className="categories" >
                <div className="C-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={categorytitle} alt="عنوان دسته بندی" />
                            <div className="C-title-right">
                                <h1>دسته بندی های ما</h1>
                                <p>
                                تیم طراحان ویشار در زمینه ها و دسته بندی های مختلف قادر به طراحی و تحویل سفارش می باشند. دسته بندی های مختلف ما قادر به تامین طیف گسترده ای از نیازهای طراحی شما می باشد. برخی از دسته بندی های ما شامل طراحی لوگو، بنر، کارت ویزیت، بروشور و... می باشد. جهت اطلاع از تمامی دسته بندی ها می توانید به صفحه دسته بندی سایت مراجعه فرمایید.
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
                                <img src={search} alt="جستجو" />
                            </div>
                            <div className="C-search-wrap" >
                                <div className="C-search-result " >
                                   {renderCategory}
                                    
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