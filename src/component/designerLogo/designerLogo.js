import React, { Component } from 'react';

import comment from '../../assets/icons/comment.svg'
import like from '../../assets/icons/like.svg'

import Button from '../common/Button/Button'

import './style.css';


class DesignerLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerLogo" 
                 style={{ backgroundImage: 'url(' + this.props.designerLogo + ')' }}
                 onClick={this.props.goToLogo}
                 >
                <div className="designerLogo-CL" >
                    <div className="designerLogo-II">
                        <span>{this.props.comments ? this.props.comments : 0 }</span>
                        <img src={comment} alt="لوگو" />
                    </div>
                    <div className="designerLogo-II" >
                        <span>{this.props.likes ? this.props.likes : 0 }</span>
                        <img src={like} alt="لایک" />
                    </div>
                </div>
                <Button
                    isLoading={this.state.isLoading}
                    title={'لوگو'}
                    bgcolor={'rgba(196, 196, 196, .2)'}
                    hoverbgcolor={'#ccc'}
                    click={this.props.logoFilter}
                    borderRadius="30px"
                    color="#555"
                />
            </div>
        );
    }
}

export default DesignerLogo;




/*
=====================================================================================
How can use this button : ------->


           <DesignerLogo
                designerLogo={this.state.designerLogo}
                designerComments={this.state.designerComments}
                designerLikes={this.state.designerLikes}
                goToLogo={this.goToLogo}
                logoFilter={this.logoFilter}
                />


=====================================================================================

*/