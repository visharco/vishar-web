import React, { Component } from 'react';



import AboutUsPart1 from '../../component/aboutUs/aboutUsPart1/aboutUsPart1';
import AboutUsPart2 from '../../component/aboutUs/aboutUsPart2/aboutUsPart2';



class AboutUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <AboutUsPart1 />
                <AboutUsPart2 />
                
            </div>
        );
    }
}

export default AboutUsComponent;