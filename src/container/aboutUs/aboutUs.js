import React, { Component } from 'react';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import video1 from '../../assets/videos/video1.mp4'
import './style.css'

class AboutUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="aboutUs">
                <div className="aboutUsTextImg" >
                    <div className="container-fluid">
                        <div className="container">
                            <h1 className="aboutUs-title" >درباره ما </h1>
                            <div className="aboutUs-box" >
                                <div className="aboutUs-text" >
                                    <p>
                                        "ویشار" به معنای "بیدار" واژه ای تبری و مورد استفاده مردمان استان مازندران و بخش هایی از گلستان می باشد. سایت ویشار با بهره گیری از طراحان مجرب از سراسر ایران و با تخصص در طراحی و تکمیل پروژه های مختلف با شعار "ویشار، طراحان همیشه بیدار" بر آن است تا بتواند سفارشات گرافیکی در زمینه های مختلفی چون طراحی لوگو،کارت ویزیت، بنر، انیمیشن و غیره را در سریع ترین زمان ممکن و با کیفیت کم نظیری اجرا و به سرانجام برساند.                                    </p>
                                    <br />
                                    <p>
                                        مجموعه ویشار افتخار همکاری با متخصصین حوزه های مختلف طراحی و گرافیک را دارا بوده و قادر به برآورده کردن نیاز طیف وسیعی از کارفرمایان و مشتریان می باشد. اگر صاحب شرکتی بزرگ هستید و یا حتی کسب و کاری محلی و کوچک دارید تفاوتی نخواهد کرد، ویشار می تواند خواسته های شما را در طراحی به نحو احسنت اجرایی کند.
                                    </p>
                                    <br />
                                    <p>
                                        مشتریان در هر مرحله از طراحی پروژه می توانند با گرافیست و طراح انتخاب شده در تماس بوده و گام به گام با تکمیل سفارش، نظرات خود را جهت بهبود کار طراحی بیان کنند و طراح نیز موظف به شنیدن آنها با سعه صدر و بهبود کار با توجه به نیاز و میل مشتری می باشد. به جرات می توانیم بگوییم که سرعت انجام کار در کنار کیفیت بالا و مشتری مداری جزو افتخارات مجموعه ویشار می باشد.
                                    </p>
                                </div>
                                <div className="aboutUs-img" ></div>
                            </div>
                        </div>
                    </div>
                </div>
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

            </div>
        );
    }
}

export default AboutUsComponent;