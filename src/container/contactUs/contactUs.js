import React, {Component} from 'react';
import Input from './../../component/common/input/Input';
import TextArea from './../../component/common/textarea/textarea';
import Button from './../../component/common/Button/Button'
import SweetAlert from 'sweetalert-react';
import './style.css';
import PostToApi from "../../controler/postToApi";
import {browserHistory} from "react-router";
import '../../../node_modules/sweetalert/dist/sweetalert.css'

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phonenumber: '',
            message: '',
        }
    }

    //
    // get data from input by event target -------------------------------------------------------------->
    //
    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //
    // ---------------------------------------------------------------------------------------------------
    _postContactUs = async () => {
        const data = new FormData();
        data.append('name', this.state.name)
        data.append('email', this.state.email)
        data.append('phone', this.state.phonenumber)
        data.append('message', this.state.message)
        const res = await PostToApi(data, 'site/contactUs' );
        if (res.status === 200) {
            this.setState({
                alertText: 'کاربر گرامی اطلاعات با موفقیت ثبت شد.',
                show: true,
                name: '',
                email: '',
                phonenumber: '',
                message: '',
            });
        } else
            this.setState({
                alertText: res.error,
                show: true
            });
    }


    render() {
        return (
            <div className="contactUs">
                <SweetAlert
                    show={this.state.show}
                    title="اعلان"
                    text={this.state.alertText}
                    onConfirm={() => this.setState({show: false})}
                />
                <div className="container-fluid">
                    <div className="container">
                        <div className="contactUs-title">
                            <h1>تماس با ما</h1>
                            <p>
                                اگر نظر، پیشنهاد ، شکایت و یا سوالی دارید می توانید در هر زمان از شبانه روز از طریق فرم زیر با ما
                                در ارتباط باشید.
                            </p>
                            <p>
                                اپراتورهای مجموعه ویشار در اسرع وقت، نظرات شما را ملاحظه و در صورت لزوم پاسخ را به
                                مشخصات ثبت شده توسط شما ارسال خواهند کرد.
                            </p>
                        </div>


                        <div className="row">
                            <div className="col-50">
                            <div className="conatactUs-form">
                            <Input
                                type={'text'}
                                name={'name'}
                                placeholder={'نام و نام خانوادگی'}
                                changed={this.changedHandler}
                                val={this.state.name}
                                error={this.state.forgetEmailError}
                            />
                            <Input
                                type={'text'}
                                name={'email'}
                                placeholder={'ایمیل'}
                                changed={this.changedHandler}
                                val={this.state.email}
                                error={this.state.forgetEmailError}
                            />
                            <Input
                                type={'text'}
                                name={'phonenumber'}
                                placeholder={'شماره همراه'}
                                changed={this.changedHandler}
                                val={this.state.phonenumber}
                                error={this.state.forgetEmailError}
                            />
                            <TextArea
                                type={'text'}
                                name={'message'}
                                placeholder={'پیام شما'}
                                changed={this.changedHandler}
                                val={this.state.message}
                                error={this.state.forgetEmailError}
                            />
                            <Button
                                isLoading={this.state.isLoading}
                                title={'ارسال'}
                                bgcolor={'#0090CF'}
                                hoverbgcolor={'#1fc056cc'}
                                borderRadius="30px"
                                click={this._postContactUs}/>

                        </div>

                            </div>
                            <div className="col-50">
                                <div className="contact-us-info">
                                <h3>نشانی</h3>
                                    <p>بخش مرکزی، خیابان امام خمینی، کوچه آفتاب ۳۸، ساختمان زاهدی، پلاک ۴۸، طبقه ۱، واحد ۳</p>
                                    <p>کد پستی: 4616819687</p>
                                    <h3>تلفن تماس</h3>
                                    <p>1144233700</p>
                                    <h3>پست الکترونیک</h3>
                                    <p>info@vishar.com</p>
                                    <p>dataamolco@yahoo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;