
import React, { Component } from 'react';

import './style.css';
import img01 from '../../../assets/images/index/01.png';
import img02 from '../../../assets/images/index/02.png';
import img03 from '../../../assets/images/index/03.png';


class HowWorking extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="howWorking" >
              
                <div class=" row row2 container   ">
                    <div className="col-50 ">
                        <div className="main-prt-one"></div>
                    </div>
                    <div className="col-50 txt-right p-20">
                        <h1>ویشار چگونه کار میکند ؟</h1>
                        <p>ما زمینه ای را فراهم کردیم تا مجرب ترین و قوی ترین طراحان در زمینه های مختلف گرد هم بیایند. مجموعه ویشار با بهره گیری از گروه های حرفه ای در حوزه های مختلف طراحی، عکس برداری، فیلم برداری و... قادر به پذیرش کلیه پروژه های گرافیکی و تبلیغاتی شما می باشد.</p>
                    </div>
                </div>

                <div class=" row container   ">
                    <div className="col-50 txt-right p-20">
                        <h1>به ما در مورد نیاز خود بگویید</h1>
                        <p>در ابتدا توضیح مختصری در مورد نیازهای خود به طراحان ما ارائه دهید. این کار تنها چند دقیقه از وقت شما را خواهد گرفت. مهم نیست پروژه شما چه مقدار ساده یا پیچیده باشد، تخصص ما اجرایی کردن آنهاست.</p>
                    </div>
                    <div className="col-50 ">
                        <div className="main-prt-two"></div>
                    </div>
                    
                </div>


                <div class=" row  row2 container   ">
                    <div className="col-50 ">
                        <div className="main-prt-three"></div>
                    </div>
                    <div className="col-50 txt-right p-20">
                        <h1>چه پروژه هایی و در چه مدت زمانی از طرف ما قابل انجام است؟</h1>
                            <p>خیلی چیزها! طراحان حرفه ای ما می توانند در زمینه طراحی لوگوهای مختلف، وب سایت ها، بنرهای تبلیغاتی و غیره فعالیت کنند. برای کسب اطلاعات بیشتر میتوانید دسته بندی خدمات مختلف ارائه شده توسط ما را در سایت ملاحظه بفرمایید. بسته به پیچیدگی یا ساده بودن طراحی، زمان تحویل سفارش متفاوت می باشد. برای طراحی های ساده تر، زمان کمتر و برای طراحی های پیچیده تر زمان بیشتری صرف خواهد شد.</p>
                    </div>
                </div>

                <div class=" row  container   ">
                    <div className="col-50 txt-right p-20">
                        <h1>هزینه طراحی چقدر می شود؟</h1>
                        <p>با توجه به طبقه بندی های مختلف هزینه دریافتی برای سفارش های مختلف متفاوت می باشد. هر طبقه بندی دارای زیر مجموعه جدا می باشد که هزینه هر کدام در مقابل آن نوشته شده است.</p>
                    </div>
                    <div className="col-50 ">
                        <div className="main-prt-four"></div>
                    </div>
               
                </div>

                    <div className="container-fluid bg-f3f3f3">

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