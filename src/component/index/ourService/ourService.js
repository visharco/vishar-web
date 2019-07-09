
import React, { Component } from 'react';

import podium from './../../../assets/icons/podium.svg'
import employee from './../../../assets/icons/employee.svg'
import employees from './../../../assets/icons/employees.svg'


import img01 from './../../../assets/images/index/taknafari.png'
import img02 from './../../../assets/images/index/hamkari.png'
import img03 from './../../../assets/images/index/behtarin tarh.png' 


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
                    <h1 className="ourService2" >خدمات ما</h1>

                        <div className="ours-box" >
                            {/* <img src={img01} alt="پروژه تک نفری" /> */}
                            <div className="img-01"></div>
                            <h2>پروژه تک نفری </h2>
                            <p>اگر به دنبال کیفیت و دقت طراحی بالاتری هستید ما به شما پیشنهاد می کنیم تا بهترین طراح ما را در قالب پروژه تک نفره در اختیار بگیرید. با توجه به نوع سفارش و ویژگی های مد نظر شما، بهترین طراح در زمینه مشخص شده از طرف ما به شما معرفی خواهد شد تا به این صورت کمترین زمان برای بررسی و انتخاب طراح مناسب از طرف شما صرف شده و طرح نهایی با سرعت، دقت و کیفیت بی نظیری به شما تحویل داده شود.</p>
                        </div>
                        <div className="ours-box" >
                            <h1 className="ourService1" >خدمات ما</h1>
                            {/* <img src={img02} alt="پروژه های همکاری" /> */}
                            <div className="img-02"></div>
                            <h2 data-aos="fade-up">پروژه های همکاری </h2>
                            <p >در صورتی که از قسمت پروژه های همکاری اقدام به ثبت سفارش کنید، پروژه شما از هر نوعی که باشد توسط چندین طراح بطور همزمان طراحی شده و در انتها تحویل شما می گردد و سپس تصمیم با شما است که کدام طراحی از کدام طراح را توجه به سلیقه خود پذیرفته و تحویل سفارش را نهایی کنید. پروژه های همکاری قابلیتی است که برای شما مقرون به صرفه تر از پروژه های تک نفره خواهد بود.</p>
                        </div>
                        <div className="ours-box" >
                            {/* <img src={img03} alt="پیدا کردن بهترین طراح" /> */}
                            <div className="img-03"></div>
                            <h2>پیدا کردن بهترین طراح </h2>
                            <p>
                            تعداد زیادی طراح با مهارت ها و تخصص های مختلف در ویشار در حال فعالیت می باشند. به وسیله سرویس جستجوی پیشرفته سایت می توانید با توجه به ویژگی های مدنظر شما، طراحان مناسب را جستجو کرده و با مشاهده پروفایل آن ها از تخصص ها و سابقه کاری آن ها مطلع شوید و در صورت لزوم با برقراری ارتباط با آن ها بتوانید برای انتخاب نهایی طراح مد نظر خود تصمیم گیری کنید. انتخاب آگاهانه طراح می تواند کیفیت نتیجه نهایی کار را بسیار بالاتر ببرد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurService;