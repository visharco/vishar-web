
import React, { Component } from 'react';

import podium from './../../../assets/images/podium.png'
import employee from './../../../assets/images/employee.png'
import employees from './../../../assets/images/employees.png'

import './style.css';



class OurService extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="ourService" >
                <div className="container-fluid">
                    <div className="container">
                        <div className="ours-box" >
                            <img src={employee} alt="سرویس" />
                            <h2>پروژه تک نفری </h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                        <div className="ours-box" >
                            <h1>سرویس ما</h1>
                            <img src={employees} alt="سرویس" />
                            <h2>پروژه های همکاری </h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                        <div className="ours-box" >
                            <img src={podium} alt="سرویس" />
                            <h2>پیدا کردن بهترین طراح </h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurService;