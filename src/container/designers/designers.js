import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import DesignerResult from '../../component/designerResult/designerResult';

import designerPic from './../../assets/images/pic1.png'
import search from './../../assets/icons/search.svg'

import './style.css';
//
// controler -------------->
//
import GetApi from '../../controler/getToApi';




class DesignersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerName: 'سارا دنیل',
            designerLevel: 'سطح ۲',
            desginers:[],
            isLoadingData : true
        }
    }
    gotoDesigner = (id) => {
        browserHistory.push('/profile/' + id);
        console.log(this.props)
    }
    componentWillMount = async() => {
        const res = await GetApi('site/user/designer');
        
        await this.setState({
            desginers:res.data,
            isLoadingData: false
        })
    }

    render() {

        const renderDesginers = (
            this.state.desginers ?   this.state.desginers.map((data,index) => {
                return  <DesignerResult
                designerPic={designerPic}
                designerName={this.state.designerName}
                designerLevel={this.state.designerLevel}
                click={() => this.gotoDesigner(data.id)}
                data={data}
            />
            })
                                                    : ''
        )
        return (
            <div className="designers" >

                <div className="designers-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <h1>طراحی که میپسندی رو انتخاب کن</h1>
                            <p>
                            طراحان ما در دسته بندی های مختلف اقدام به طراحی کرده و کیفیت کار هر کدام از آنها توسط مشتریان ارزیابی می شود. نتیجه این ارزیابی در قالب امتیاز در پروفایل طراح برای عموم قابل نمایش می باشد. شما مشتریان عزیز می توانید با توجه به نوع طراحی درخواستی خود و همچنین ملاحظه نمونه کارهای طراحان سایت و ارزیابی کیفیت آن ها، اقدام به انتخاب طراح مناسب برای همراهی در تکمیل پروژه خود کنید.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="designers-search" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="designers-search-box " >
                                {/*<input type="text" />*/}
                                {/*<img src={search} alt="جستجو" />*/}
                            </div>
                            <div className="designers-search-wrap" >
                                <div className="designers-search-result " >
                                    {/* <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                        click={this.gotoDesigner}
                                    /> */}

                                    {!this.state.isLoadingData ? renderDesginers : <div className="loading-fff"></div>}
                             
                            
                     
                                </div>
                                {/* <div className="pagination" >
                                    <p className="pagination-number">1</p>
                                    <p className="pagination-number">2</p>
                                    <p className="pagination-number pagination-number-selected">3</p>
                                    <p className="pagination-number">4</p>
                                    <p className="pagination-number">5</p>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DesignersComponent;