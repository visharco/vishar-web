import React, { Component } from 'react';

import Button from '../common/Button/Button';
import defualtAvatar from '../../assets/images/defualtAvatar.svg'

import './style.css';


class DesignerResult extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerResult" onClick={this.props.click} > 
                {/* <img src={this.props.data.image ? this.props.data.image : defualtAvatar} alt="طراح" /> */}
                <div style={{backgroundImage: 'url(' +  this.props.data.image  + ')' }}  className="image-of-desginer" ></div>
                <div className="designerResult-title"  > 
                    <h1>{this.props.data.name}</h1>
                    <h2>سطح حرفه ای</h2>
                </div>
                <Button
                    isLoading={this.state.isLoading}
                    title={'مشاهده پروفایل '}
                    bgcolor={'#F1F1F1'}
                    hoverbgcolor={'#ccc'}
                    click={this.callSubmit}
                    borderRadius="30px"
                    color="#919191"
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