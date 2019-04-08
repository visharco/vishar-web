import React, { Component } from 'react';


import zebra from '../../assets/images/zebra.png'
import medal from '../../assets/icons/medal.svg'


import './style.css';


class Appreciation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="appreciation">
                <div className="A-title" >
                    <h1>
                        نام کمپانی
                    </h1>
                    <h2>
                        لوگو
                    </h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                <img src={zebra} alt="لوگو" className="A-logo"/>
                <img src={medal} alt="مدال" className="A-medal" />

            </div>
        );
    }
}

export default Appreciation;




/*
=====================================================================================
How can use this button : ------->


           <Project />


=====================================================================================

*/