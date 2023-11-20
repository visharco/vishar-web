import React, { Component } from 'react';
import img01 from '../../assets/images/team/1.jpg';
import img02 from '../../assets/images/team/2.jpg';
import img03 from '../../assets/images/team/3.jpg';
import img04 from '../../assets/images/team/4.jpg';
import img05 from '../../assets/images/team/5.jpg';
import img06 from '../../assets/images/team/6.jpg';
import img07 from '../../assets/images/team/7.jpg';
import img08 from '../../assets/images/team/8.jpg';
import img09 from '../../assets/images/team/9.jpg';
import img10 from '../../assets/images/team/10.jpg';
import img11 from '../../assets/images/team/11.jpg'; 
import AOS from 'aos';
import "video-react/dist/video-react.css";
import './style.css';

class AboutUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        AOS.init();

    }

    render() {

        const _renderTeam = (img, name, position) => (
            <div className="team-avatar" data-aos="flip-right">
                <div className="team-avatar-image" style={{ backgroundImage: `url(${img})` }}></div>
                <p className="team-name">{name}</p>
                <p className="team-position">{position}</p>
            </div>
        )
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
                <div className="about-team" >
                    <div className="container-fluid">
                        <div className="container">

                            <h1 className="aboutUs-title" > تیم ویشار </h1>

                            <h3 className="team-title">بنیانگذاران</h3>
                            <div className="team-container">
                                {_renderTeam(img01, 'مجید ایزدخواه', 'مدیرعامل')}
                                {_renderTeam(img02, 'سودابه رضایی', 'مدیر ارشد بازاریابی')}
                            </div>

                            <h3 className="team-title">مدیران ارشد</h3>
                            <div className="team-container">
                                {_renderTeam(img03, 'سهیلا تاپ', 'مدیر ارشد اجرایی')}
                                {_renderTeam(img04, 'حسین رضایی', 'مدیر تحقیق و توسعه')}
                                {_renderTeam(img08, 'علی کاظمی', 'مدیر IT')}
                                {_renderTeam(img06, 'یزدان غلامی', 'مدیر ارشد طراحی')}
                                {_renderTeam(img10, 'فائقه غلامی', 'مدیر واحد حقوقی و قراردادها')}
                            </div>

                            <h3 className="team-title">کارشناسان</h3>
                            <div className="team-container">
                                {_renderTeam(img07, 'متینا طباطبایی', 'کارشناس طراحی')}
                                {_renderTeam(img05, 'زهره باقری', 'کارشناس IT')}
                                {_renderTeam(img09, 'زهره ابراهیمی', 'کارشناس فروش و بازاریابی')}
                                {_renderTeam(img11, 'فاطمه یدی نژاد', 'کارشناس  فناوری')}
                                {/* {_renderTeam(imgWoman,'زهره موسویان','کارشناس  فن آوری')}  */}
                            </div>

                            <div className="team-container">
                                {/* {_renderTeam(imgWoman,'ساره باباجانی','کارشناس  فروش ')} 
                            {_renderTeam(imgMan,'میلاد رحمانی ','کارشناس  فروش ')}  */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsComponent;
