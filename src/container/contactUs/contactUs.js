import React, { Component } from 'react';
import Input from './../../component/common/input/Input';
import TextArea from './../../component/common/textarea/textarea';
import Button from './../../component/common/Button/Button'

import './style.css';



class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
    _postContactUs = () => {

        const data = new FormData();
        data.append('name', this.state.name)
        data.append('name', this.state.name)
        data.append('name', this.state.name)
        data.append('name', this.state.name)
        alert("conatc us")
    }


    render() {
        return (
            <div className="contactUs" >

                <div className="container-fluid">
                    <div className="container" >
                        <div className="contactUs-title" >
                            <h1>تماس با ما</h1>
                            <p>
                            اگر نظر، پیشنهاد یا سوالی دارید می توانید در هر زمان از شبانه روز از طریق فرم زیر با ما در ارتباط باشید.
                            </p> 
                            <p>
                            اپراتورهای مجموعه ویشار در اسرع وقت، نظرات شما را ملاحظه و در صورت لزوم پاسخ را به مشخصات ثبت شده توسط شما ارسال خواهند کرد.
                            </p>
                        </div>
                        <div className="conatactUs-form" >
                            <Input
                                type={'text'}
                                name={'name'}
                                placeholder={'نام و نام خانوادگی'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />
                            <Input
                                type={'text'}
                                name={'email'}
                                placeholder={'ایمیل'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />
                            <Input
                                type={'text'}
                                name={'phonenumber'}
                                placeholder={'شماره همراه'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />
                            <TextArea
                                type={'text'}
                                name={'message'}
                                placeholder={'پیام شما'}
                                changed={this.changedHandler}
                                error={this.state.forgetEmailError}
                            />
                            <Button
                                isLoading={this.state.isLoading}
                                title={'ارسال'}
                                bgcolor={'#0090CF'}
                                hoverbgcolor={'#1fc056cc'}
                                borderRadius="30px"
                                click={this._postContactUs} />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;