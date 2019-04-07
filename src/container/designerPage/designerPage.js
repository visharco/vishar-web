import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import pic1 from './../../assets/images/pic1.png'
import designerLogo from '../../assets/images/profilelogo.png'

import Button from '../../component/common/Button/Button';
import DesignerLogo from '../../component/designerLogo/designerLogo'


import './style.css';



class DesignersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerComments: 20,
            designerLikes: 10
        }
    }

    aboutmeText = React.createRef();
    profileText = React.createRef();
    appreciateText = React.createRef();

    appreciate = React.createRef();
    aboutme = React.createRef();
    profile = React.createRef();


    descriptionHandler = (e) => {

        if (e.target.id === 'aboutme') {
            this.aboutmeText.current.style.display = 'block'
            this.profileText.current.style.display = 'none'
            this.appreciateText.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.appreciate.current.style.backgroundColor = "transparent"
            this.profile.current.style.backgroundColor = "transparent"
        }
        else if (e.target.id === 'profile') {
            this.aboutmeText.current.style.display = 'none'
            this.profileText.current.style.display = 'block'
            this.appreciateText.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.appreciate.current.style.backgroundColor = "transparent"
            this.aboutme.current.style.backgroundColor = "transparent"
        }
        else if (e.target.id === 'appreciate') {
            this.aboutmeText.current.style.display = 'none'
            this.profileText.current.style.display = 'none'
            this.appreciateText.current.style.display = 'block'

            e.target.style.backgroundColor = "#D8D8D8"
            this.profile.current.style.backgroundColor = "transparent"
            this.aboutme.current.style.backgroundColor = "transparent"
        }
    }

    goToLogo = () => {
        browserHistory.push('/designer-logo');
    }


    render() {
        return (
            <div className="designerPage" >

                <div className="DP-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={pic1} />
                            <div className="DP-name">
                                <h1>امید آرمانی</h1>
                                <h2>سطح ۱</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="DP-desc-up" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="DP-desc-box1" >
                                <Button
                                    isLoading={this.state.isLoading}
                                    title={'دعوت به همکاری'}
                                    bgcolor={'#0080FF'}
                                    hoverbgcolor={'#1fc056cc'}
                                    click={this.callSubmit}
                                    borderRadius="5px"
                                    color="#fff"
                                />
                                <div className="DP-desc-box">
                                    <div className="DP-desc-title" onClick={this.descriptionHandler} id="appreciate" ref={this.appreciate} >قدر دانی ها</div>
                                    <div className="DP-desc-title" onClick={this.descriptionHandler} id="profile" ref={this.profile} >پروفایل</div>
                                    <div className="DP-desc-title" onClick={this.descriptionHandler} id="aboutme" ref={this.aboutme}>درباره ی من</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="DP-desc-down" >
                    <div className="container-fluid">
                        <div className="container" >

                            <div className="DP-desc-box2" >
                                <div className="DP-desc-texts" ref={this.aboutmeText}>
                                    <div className="DP-desc-text" >
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                        </p>
                                        <h1>خلاصه</h1>
                                    </div>
                                    <div className="DP-desc-text" >
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                        </p>
                                        <h1>تجربیات</h1>
                                    </div>
                                </div>

                                <div className="DP-desc-texts " ref={this.profileText} >
                                    <div className="DP-profile">
                                        <DesignerLogo
                                            designerLogo={designerLogo}
                                            designerComments={this.state.designerComments}
                                            designerLikes={this.state.designerLikes}
                                            goToLogo={this.goToLogo}
                                            logoFilter={this.logoFilter}
                                        />
                                        <DesignerLogo
                                            designerLogo={designerLogo}
                                            designerComments={this.state.designerComments}
                                            designerLikes={this.state.designerLikes}
                                            goToLogo={this.goToLogo}
                                            logoFilter={this.logoFilter}
                                        />
                                        <DesignerLogo
                                            designerLogo={designerLogo}
                                            designerComments={this.state.designerComments}
                                            designerLikes={this.state.designerLikes}
                                            goToLogo={this.goToLogo}
                                            logoFilter={this.logoFilter}
                                        />
                                        <DesignerLogo
                                            designerLogo={designerLogo}
                                            designerComments={this.state.designerComments}
                                            designerLikes={this.state.designerLikes}
                                            goToLogo={this.goToLogo}
                                            logoFilter={this.logoFilter}
                                        />
                                        <DesignerLogo
                                            designerLogo={designerLogo}
                                            designerComments={this.state.designerComments}
                                            designerLikes={this.state.designerLikes}
                                            goToLogo={this.goToLogo}
                                            logoFilter={this.logoFilter}
                                        />
                                    </div>
                                    <div className="designerPage-pagination" >
                                        <p className="pagination-number">1</p>
                                        <p className="pagination-number">2</p>
                                        <p className="pagination-number pagination-number-selected">3</p>
                                        <p className="pagination-number">4</p>
                                        <p className="pagination-number">5</p>
                                    </div>
                                </div>

                                <div className="DP-desc-texts" ref={this.appreciateText}>

                                    تقدیر
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DesignersPage;