
import React, { Component } from 'react';

import './style.css';
import img01 from '../../../assets/images/index/01.png'
import img02 from '../../../assets/images/index/02.png'
import img03 from '../../../assets/images/index/03.png'


class HowWorking extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="howWorking" >
              
              


                    <div className="container-fluid">

                    <div className="container">
                        <h1>از کجا شروع کنم ؟</h1>
                        <div className="how-right">
                            <div className="how-text" >
                                <h1>
                                    حساب کاربریت رو بساز
                            </h1>
                                <p >
                                در سایت ویشار برای دریافت طرح مورد نظر خودتون تنها سه قدم وجود داره. اولین قدم اینه که حساب کاربری خودت رو داشته باشی. میتونی با ثبت نام در سایت ویشار به راحتی و با صرف کمترین وقت، اولین قدم رو برداری.
                           </p>
                            </div>
                            <div className="how-num" style={{backgroundImage:'url(' + img03 +')'}}>
                                 
                           </div>
                        </div>

                        <div className="how-left">
                            <div className="how-text" >
                                <h1>
                                پیدا کردن بهترین طراح
                                </h1>
                                <p >
                                تعداد زیادی طراح با مهارت ها و تخصص های مختلف در ویشار در حال فعالیت می باشند. به وسیله سرویس جستجوی پیشرفته سایت می توانید با توجه به ویژگی های مدنظر شما، طراحان مناسب را جستجو کرده و با مشاهده پروفایل آن ها از تخصص ها و سابقه کاری آن ها مطلع شوید و در صورت لزوم با برقراری ارتباط با آن ها بتوانید برای انتخاب نهایی طراح مد نظر خود تصمیم گیری کنید. انتخاب آگاهانه طراح می تواند کیفیت نتیجه نهایی کار را بسیار بالاتر ببرد.
                           </p>
                            </div>
                            <div className="how-num" style={{backgroundImage:'url(' + img02 +')'}}>
                                 
                            </div>
                        </div>

                        <div className="how-right">
                            <div className="how-text" >
                                <h1>
                                بهترین طرح رو انتخاب کن
                                </h1>
                                <p >
                                بعد از انتخاب نوع پروژه، طراحان ویشار شروع به طراحی سفارش شما می کنن و در زمان تعیین شده به شما تحویل میدن. از بین طراحی های تحویل داده شده می تونید با نظر خودتون، بهترین و مناسب ترین طرح رو انتخاب و تحویل سفارش رو نهایی کنید.
                           </p>
                            </div>
                            <div className="how-num" style={{backgroundImage:'url(' + img01 +')'}}>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowWorking;