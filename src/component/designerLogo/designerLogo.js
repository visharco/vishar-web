import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import comment from '../../assets/icons/comment.svg'
import like from '../../assets/icons/like.svg'

import designerLogo from '../../assets/images/profilelogo.png'

import './style.css';


class DesignerLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _goTo(id){
         browserHistory.push('/designs/' + id);
       // browserHistory.push({pathname:'/designs',state: this.props.data })

    }

    render() {
        return (
            <div className="designerLogo"
                style={{ backgroundImage: 'url(' + this.props.data.image_thumb + ')' }}
                onClick={() => this._goTo(this.props.data.id)}
                key={this.props.index}
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
                <div className="designerLogo-CL" >
                    <div className="designerLogo-II" >
                        <span>
                            {this.props.data.project.category.title}
                        </span>
                    </div>

                </div>

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