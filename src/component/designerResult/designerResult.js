import React, { Component } from 'react';

import Button from '../common/Button/Button'

import './style.css';


class DesignerResult extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerResult">
                <img src={this.props.designerPic} />
                <div className="designerResult-title" > 
                    <h1>{this.props.designerName}</h1>
                    <h2>{this.props.designerLevel}</h2>
                </div>
                <Button
                    isLoading={this.state.isLoading}
                    title={'بیشتر'}
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


           <DesignerResult
                designerPic={this.state.designerPic}
                designerName={this.state.designerName}
                designerLevel={this.state.designerLevel}
                />


=====================================================================================

*/