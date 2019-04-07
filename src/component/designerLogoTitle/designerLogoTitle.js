import React, { Component } from 'react';

import comment from '../../assets/icons/comment.svg'
import like from '../../assets/icons/like.svg'
import view from '../../assets/icons/view.svg'
import customer1 from '../../assets/images/customer1.png'


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
                    <Button
                        isLoading={this.state.isLoading}
                        title={'نمایش صفحه ی پروفایل'}
                        bgcolor={'#0090CF'}
                        hoverbgcolor={'#419cdb80'}
                        click={this.goToFullProfile}
                        borderRadius="5px"
                        color="#fff"
                    />
                    <div className="DLT-icon-box" >
                        <div className="DLT-icons" >
                            <img src={like} />
                            <span>12</span>
                        </div>
                        <div className="DLT-icons" >
                            <img src={view} />
                            <span>23</span>
                        </div>
                        <div className="DLT-icons" >
                            <img src={comment} />
                            <span>12</span>
                        </div>
                    </div>

                </div>
                <div className="DLT-right" >
                    <div className="DLT-right-title" >
                        <h1>امید آرمانی</h1>
                        <h2>1 سطح </h2>
                    </div>
                    <img src={customer1} />

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