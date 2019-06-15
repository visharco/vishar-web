import React, {Component} from 'react';

import categorytitle from '../../assets/images/categorytitle.svg'
import search from '../../assets/icons/search.svg'

import Product from '../../component/product/product'

import './style.css';
import GetApi from '../../controler/getToApi';


class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: []
        }
    }

    componentWillMount = async () => {

        const res = await GetApi('site/category');
        await this.setState({
            category: res.data
        })
    }

    render() {

        const renderCategory = (
            this.state.category ? this.state.category.map((data, index) => {
                return <Product data={data}/>
            }) : ''
        )
        return (

            <div className="categories">
                <div className="C-title">
                    <div className="container-fluid">
                        <div className="container">
                            <img src={categorytitle} alt="عنوان دسته بندی"/>
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
                                {/*<input type="text" />*/}
                                {/*<img src={search} alt="جستجو" />*/}
                            </div>
                            <div className="C-search-wrap">
                                <div className="C-search-result ">
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