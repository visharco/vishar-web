import React, { Component } from 'react';

import comment from '../../assets/icons/comment.svg'
import like from '../../assets/icons/like.svg'

import Button from '../common/Button/Button';
import designerLogo from '../../assets/images/profilelogo.png'

import './style.css';


class DesignerLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerLogo" 
                 style={{ backgroundImage: 'url(' + designerLogo + ')' }}
                 onClick={this.props.goToDesigns}
                 >
                <div className="designerLogo-CL" >
                    <div className="designerLogo-II">
                        <span>12</span>
                        <img src={comment} alt="لوگو" />
                    </div>
                    <div className="designerLogo-II" >
                        <span>23</span>
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
                goToDesigns={this.goToDesigns}
                logoFilter={this.logoFilter}
                />


=====================================================================================

*/