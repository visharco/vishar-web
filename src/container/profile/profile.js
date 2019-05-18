import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import pic1 from './../../assets/images/pic1.png'

import Button from '../../component/common/Button/Button';
import DesignerLogo from '../../component/designerLogo/designerLogo';
import Appreciation from '../../component/appreciation/appreciation';
import GetToApi from '../../controler/getToApi';
import loadingImage from '../../assets/images/loading-image.gif';


import './style.css';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerComments: 20,
            designerLikes: 10,
            data:[],
            avatar : loadingImage
        }
    }

    componentWillMount = async() => {
        let id = window.location.pathname.split('/')[2];
        console.log(id)

        const res = await GetToApi('site/user/designer/' + id);
        this.setState({
            data: res.data,
            avatar:res.data.image_thumb
        })

    }

    //
    // ---------------------------- Tabs Info ---------------------------------------------------------
    //

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
          //  this.appreciateText.current.style.display = 'none'  // TODO later fixed

            e.target.style.backgroundColor = "#D8D8D8"
            //this.appreciate.current.style.backgroundColor = "transparent"  // TODO later fixed
            this.profile.current.style.backgroundColor = "transparent"
        }
        else if (e.target.id === 'profile') {
            this.aboutmeText.current.style.display = 'none'
            this.profileText.current.style.display = 'block'
            // this.appreciateText.current.style.display = 'none'  // TODO later fixed

            e.target.style.backgroundColor = "#D8D8D8"
           // this.appreciate.current.style.backgroundColor = "transparent"  // TODO later fixed
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

    goToDesigns = () => {
        browserHistory.push('/designs');
    }


    render() {


        const renderMyProtfilo = (
            this.state.data.portfolio ?  this.state.data.portfolio.map((data,index) => {
                    return   <DesignerLogo
                                data={data}
                                index={index}
                                goToDesigns={this.goToDesigns}
                                logoFilter={this.logoFilter}
                            />
            }) : ''
        )

        return (
            <div className="Profile" >

                <div className="Profile-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={this.state.avatar} alt="طراح" />
                            <div className="Profile-name">
                                <h1>{this.state.data.name}</h1>
                                <h2>سطح ۱</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="Profile-desc-up" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="Profile-desc-box1" >
                                <Button
                                    isLoading={this.state.isLoading}
                                    title={'دعوت به همکاری'}
                                    bgcolor={'#0080FF'}
                                    hoverbgcolor={'#1fc056cc'}
                                    click={this.callSubmit}
                                    borderRadius="5px"
                                    color="#fff"
                                />
                                <div className="Profile-desc-box">
                                    {/* <div className="Profile-desc-title" onClick={this.descriptionHandler} id="appreciate" ref={this.appreciate} >قدر دانی ها</div> */}
                                    <div className="Profile-desc-title" onClick={this.descriptionHandler} id="profile" ref={this.profile} >پروفایل</div>
                                    <div className="Profile-desc-title" onClick={this.descriptionHandler} id="aboutme" ref={this.aboutme}>درباره ی من</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="Profile-desc-down" >
                    <div className="container-fluid">
                        <div className="container" >

                            <div className="Profile-desc-box2" >
                                <div className="Profile-desc-texts" ref={this.aboutmeText}>
                                    <div className="Profile-desc-text" >
                                        <p>
                                        {this.state.data.summary}
                                        </p>
                                        <h1>خلاصه</h1>
                                    </div>
                                    <div className="Profile-desc-text" >
                                        <p>
                                           {this.state.data.experience}
                                        </p>
                                        <h1>تجربیات</h1>
                                    </div>
                                </div>

                                <div className="Profile-desc-texts " ref={this.profileText} >
                                    <div className="Profile-profile">
                                      {renderMyProtfilo}

                                    </div>
                                    {/* <div className="pagination" >
                                        <p className="pagination-number">1</p>
                                        <p className="pagination-number">2</p>
                                        <p className="pagination-number pagination-number-selected">3</p>
                                        <p className="pagination-number">4</p>
                                        <p className="pagination-number">5</p>
                                    </div> */}
                                </div>

                                <div className="Profile-desc-texts" ref={this.appreciateText}>

                                  <Appreciation goToDesigns={this.goToDesigns} />
                                  <Appreciation goToDesigns={this.goToDesigns} />
                                  <Appreciation goToDesigns={this.goToDesigns} />
                                  <Appreciation goToDesigns={this.goToDesigns} />
                                  <Appreciation goToDesigns={this.goToDesigns} />
                                  <Appreciation goToDesigns={this.goToDesigns} />
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;