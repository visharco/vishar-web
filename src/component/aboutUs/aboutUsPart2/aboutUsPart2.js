import React, { Component } from 'react';

import "video-react/dist/video-react.css";
import { Player } from 'video-react';


import video1 from '../../../assets/videos/video1.mp4'


import './style.css';




class AboutUsPart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div className="aboutUsVideo" >
                <div className="container-fluid">
                    <div className="container">

                        <h1 className="aboutUs-title" >ویدیوی ما </h1>
                        <div className="aboutUs-play" >
                            <Player
                                playsInline
                                poster="./../../../assets/images/videoposter.png"
                                src={video1}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsPart2;