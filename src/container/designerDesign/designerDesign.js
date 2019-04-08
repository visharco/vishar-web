import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import biggerlogo1 from './../../assets/images/biggerlogo1.png'

import DesignerLogoTitle from '../../component/designerLogoTitle/designerLogoTitle';
import DesignerLogoPostComment from '../../component/designerLogoPostComment/designerLogoPostComment.js';
import DesignerLogoDetail from '../../component/designerLogoDetail/designerLogoDetail';
import DesignerLogoComment from '../../component/designerLogoComment/designerLogoComment';

import './style.css';



class DesignerDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerComments: 20,
            designerLikes: 10,
            designerViews: 12,
            designerName: 'امید آرمانی',
            designerLevel: '1'
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
            <div className="designerDesign" >

                <div className="DD-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <DesignerLogoTitle />
                        </div>
                    </div>
                </div>

                <div className="DD-logos" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={biggerlogo1} alt="لوگو" />
                            <img src={biggerlogo1} alt="لوگو" />
                        </div>
                    </div>
                </div>
                <div className="DD-comment-box" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="DD-up">
                                <DesignerLogoDetail />
                                <DesignerLogoPostComment />
                            </div>
                            <div className="DD-down" >
                                <DesignerLogoComment />
                                <DesignerLogoComment />
                                <DesignerLogoComment />
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DesignerDesign;