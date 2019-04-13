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
    render() {
        return (
            <div className="contactUs" >

                <div className="container-fluid">
                    <div className="container" >
                        <div className="contactUs-title" >
                            <h1>تماس با ما</h1>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
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
                                click={this.callSubmit} />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;