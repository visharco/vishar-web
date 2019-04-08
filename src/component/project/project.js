import React, { Component } from 'react';

import Button from '../common/Button/Button';

import design1 from '../../assets/images/design1.png'
import layersicon from '../../assets/icons/layersicon.svg'
import clock from '../../assets/icons/clock.svg'
import comment from '../../assets/icons/comment.svg'

import './style.css';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="project">
                <div className="p-left" >
                    <p className="p-price" >1000000 تومان</p>
                    <div className="p-icons" >
                        <div className="p-icon" >
                            <p>0 طراحی</p>
                            <img src={layersicon} />
                        </div>
                        <div className="p-icon" >
                            <p> 
                                <span>3 روز </span>
                                <span>21 ساعت</span>
                            </p>
                            <img src={clock} />
                        </div>
                        <div className="p-icon" >
                            <p>بدون نظر</p>
                            <img src={comment} />
                        </div>
                    </div>
                    <Button
                        isLoading={this.state.isLoading}
                        title={'نمایش'}
                        bgcolor={'#0090CF'}
                        hoverbgcolor={'#0090cfcc'}
                        click={this.callSubmit}
                        borderRadius="30px"
                        color="#fff"
                    />
                </div>
                <div className="p-right" >
                    <div className="p-right-title" >
                        <div>

                            <h1>طراحی لوگو عنوان پروژه</h1>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                        </div>
                        <div className="p-right-btns" >
                            <p>لوگو</p>
                        </div>
                    </div>
                    <img src={design1} />



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