import React, { Component } from 'react';
import categoryTitle from '../../assets/images/categorytitle.svg'
import Product from '../../component/product/product'
import GetApi from '../../controller/getToApi';
import './style.css';


class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            isLoadingData: true,

        }
    }

    componentWillMount = async () => {

        const res = await GetApi('site/category');
        await this.setState({
            category: res.data,
            isLoadingData: false
        })
    }

    render() {

        const renderCategory = (
            this.state.category ? this.state.category.map((data, index) => {
                return <Product data={data} />
            }) : ''
        )
        return (

            <div className="categories">
                <div className="C-title">
                    <div className="container-fluid">
                        <div className="container">
                            <img src={categoryTitle} alt="عنوان دسته بندی" />
                            <div className="C-title-right">
                                <h1>دسته بندی های ویشار</h1>
                                <p>
                                    طراحان ویشار، پروژه های مختلفی را در زمینه هایی چون طراحی لوگو، ست اداری، بنر، طراحی کارت ویزیت، بروشور و... طراحی و تحویل مشتری می دهند. دسته بندی های ما طیف گسترده ای از نیازهای شما را برآورده خواهند کرد. پس با ما همراه باشید.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="C-search">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="C-search-box ">
                            </div>
                            <div className="C-search-wrap">
                                <div className="C-search-result ">
                                    {!this.state.isLoadingData ? renderCategory : <div className="loading-fff"></div>}
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