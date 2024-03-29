import React, { Component } from 'react';
import Button from '../common/Button/Button';
import layersIcon from '../../assets/icons/layersicon.svg'
import clock from '../../assets/icons/clock.svg'
import PriceDigit from '../priceDigit/priceDigit'; 
import './style.css';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    showProject(id) {
        window.location = 'http://dashboard.ddtarh.ir/DesignerProjectDetail/' + id
    }
    render() {
        return (
            <div className="project" onClick={() => this.showProject(this.props.data.id)}>
                <div className="p-left" >
                    <p className="p-price" >{PriceDigit(this.props.data.invoice.price_all, 'price')} تومان</p>
                    <div className="p-icons" >
                        <div className="p-icon" >
                            <p>{this.props.data.count_design} طرح</p>
                            <img src={layersIcon} alt="لایه ها " />

                        </div>
                        <div className="p-icon" >
                            <p>
                                <span>{this.props.data.countdown_time}</span>
                            </p>
                            <img src={clock} alt="ساعت" />
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
                                {this.props.data.desc.substring(0, 200)}
                            </p>
                        </div>
                        <div className="p-right-tags" >
                            <p>{this.props.data.invoice.category}</p>
                        </div>
                    </div>
                    <div className="image-of-project"></div>
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