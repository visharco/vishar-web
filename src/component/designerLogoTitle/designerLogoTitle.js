import React, { Component } from 'react';

import Button from '../common/Button/Button'


import './style.css';


class DesignerLogoTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerLogoTitle" >

                <div className="DLT-left" >
                    {/* <Button
                        isLoading={this.state.isLoading}
                        title={'نمایش صفحه ی پروفایل'}
                        bgcolor={'#0090CF'}
                        hoverbgcolor={'#419cdb80'}
                        click={this.goToFullProfile}
                        borderRadius="5px"
                        color="#fff"
                    /> */}


                    {/* <div className="DLT-icon-box" >
                        <div className="DLT-icons" >
                            <img src={like} alt="لایک" />
                            <span>12</span>
                        </div>
                        <div className="DLT-icons" >
                            <img src={view} alt="بازدید" />
                            <span>23</span>
                        </div>
                        <div className="DLT-icons" >
                            <img src={comment} alt="نظر" />
                            <span>12</span>
                        </div>
                    </div> */}

                </div>
                <div className="DLT-right" >
                    <div className="DLT-right-title" >
                        <h1>{this.props.name}</h1>
                        <h2>1 سطح </h2>
                    </div>
                    <img src={this.props.avatar} alt="مشتری" />

                </div>
            </div>
        );
    }
}

export default DesignerLogoTitle;




/*
=====================================================================================
How can use this button : ------->


           <DesignerLogoTitle />


=====================================================================================

*/