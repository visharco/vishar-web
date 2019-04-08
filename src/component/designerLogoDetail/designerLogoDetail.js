import React, { Component } from 'react';

import comment from '../../assets/icons/comment.svg';
import like from '../../assets/icons/like.svg';
import view from '../../assets/icons/view.svg';
import customer1 from '../../assets/images/customer1.png';

import './style.css';


class DesignerLogoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerLogoDetail" >
                <div className="DLD-right" >
                    <div className="DLD-right-title" >
                        <h1>امید آرمانی</h1>
                        <h2>1 سطح </h2>
                    </div>
                    <img src={customer1} />

                </div>
                <p className="DLD-time" >
                     انتشار داده شده در : 
                    <span> '  10:20 ب.ظ  '</span>
                    <span> '  10/10/1398  '</span>
                </p>
                <div className="DLD-icon-box" >
                    <div className="DLD-icons" >
                        <img src={like} />
                        <span>12</span>
                    </div>
                    <div className="DLD-icons" >
                        <img src={view} />
                        <span>33</span>
                    </div>
                    <div className="DLD-icons" >
                        <img src={comment} />
                        <span>39</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignerLogoDetail;




/*
=====================================================================================
How can use this button : ------->


           <DesignerLogoDetail
                designerviews={this.state.designerviews}
                designerComments={this.state.designerComments}
                designerLikes={this.state.designerLikes}
                designerName={this.state.designerName}
                designerLevel={this.state.designerLevel}
                designerPicture={this.state.designerPicture}
                publishedTime={this.state.designerTime}
                publishedClock={this.state.publishedClock}
                />


=====================================================================================

*/