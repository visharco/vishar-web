import React, { Component } from 'react';

import Button from '../common/Button/Button';

import design1 from '../../assets/images/design1.png'
import layersicon from '../../assets/icons/layersicon.svg'
import clock from '../../assets/icons/clock.svg'
import comment from '../../assets/icons/comment.svg'
import PriceDigit from '../priceDigit/priceDigit';

import './style.css';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    showProject (id)  {
        window.location = 'http://dashboard.vishar.com/DesignerProjectDetail/'+ id
    }
    render() {
        return (
            <div className="project" onClick={this.props.showProject} >
                <div className="p-left" >
                    <p className="p-price" >{PriceDigit(this.props.data.invoice.price_all,'price')} تومان</p>
                    <div className="p-icons" >
                        <div className="p-icon" >
                            <p>0 طراحی</p>
                            <img src={layersicon} alt="لایه ها " />
                        </div>
                        <div className="p-icon" >
                            <p>
                                <span>3 روز </span>
                                <span>21 ساعت</span>
                            </p>
                            <img src={clock} alt="ساعت" />
                        </div>
                        <div className="p-icon" >
                            <p>بدون نظر</p>
                            <img src={comment} alt="کامنت" />
                        </div>
                    </div>
                    <Button
                        isLoading={this.state.isLoading}
                        title={'نمایش'}
                        bgcolor={'#0090CF'}
                        hoverbgcolor={'#0090cfcc'}
                        click={() => this.showProject(this.props.data.id)}
                        borderRadius="30px"
                        color="#fff"
                    />
                </div>
                <div className="p-right" >
                    <div className="p-right-title" >
                        <div className="p-right-text" >
                            <h1>{this.props.data.title}</h1>
                            <p>
                                {this.props.data.desc}
                            </p>
                        </div>
                        <div className="p-right-tags" >
                            <p>{this.props.data.invoice.category}</p>
                        </div>
                    </div>
                    <img src={design1} alt="طرح" />



                </div>

            </div>
        );
    }
}

export default Project;




/*
=====================================================================================
How can use this button : ------->


           <Project />


=====================================================================================

*/