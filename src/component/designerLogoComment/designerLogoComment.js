import React, { Component } from 'react';

import report from '../../assets/icons/report.svg'
import pic1 from '../../assets/images/pic1.png'

import './style.css';


class DesignerLogoComment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerLogoComment" >
                <div className="DLC-box" >
                    <div className="DLC-right" >
                        <img src={pic1} />
                        <div className="DLC-right-title" >
                            <h1>مارک والبرگ</h1>
                            <h2>10:20 ب.ظ  10/10/1398</h2>
                        </div>
                    </div>
                    <div className="DLC-report" >
                        <span>گزارش</span>
                        <img src={report} />
                    </div>
                </div>
                <p>طراحیت عالیه . دمت گرم</p>
            </div>
        );
    }
}

export default DesignerLogoComment;




/*
=====================================================================================
How can use this button : ------->


           <DesignerLogoComment />


=====================================================================================

*/