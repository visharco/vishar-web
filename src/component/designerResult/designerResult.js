import React, { Component } from 'react';

import Button from '../common/Button/Button';
import designerPic from '../../assets/images/pic1.png'

import './style.css';


class DesignerResult extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerResult" onClick={this.props.click} > 
                <img src={designerPic} />
                <div className="designerResult-title" > 
                    <h1>مارک والبرگ</h1>
                    <h2>سطح 1</h2>
                </div>
                <Button
                    isLoading={this.state.isLoading}
                    title={'مشاهده پروفایل '}
                    bgcolor={'#F1F1F1'}
                    hoverbgcolor={'#ccc'}
                    click={this.callSubmit}
                    borderRadius="30px"
                    color="#919191"
                    click={this.props.click}
                />
            </div>
        );
    }
}

export default DesignerResult;




/*
=====================================================================================
How can use this button : ------->


           <DesignerResult />


=====================================================================================

*/