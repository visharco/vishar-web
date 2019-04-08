import React, { Component } from 'react';

import Button from '../common/Button/Button'
import TextArea from '../common/textarea/textarea'
import './style.css';


class DesignerLogoPostComment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="designerLogoPostComment" >
                <TextArea
                    type={'text'}
                    name={'comment'}
                    placeholder={'نظرت رو درباره این پروژه بده '}
                    changed={this.changedHandler}
                    error={this.state.forgetEmailError}
                />
                <Button
                    isLoading={this.state.isLoading}
                    title={'افزودن نظر'}
                    bgcolor={'#fff'}
                    hoverbgcolor={'#dadada'}
                    click={this.callSubmit}
                    borderRadius="30px"
                    color="#757575"
                />
            </div>
        );
    }
}

export default DesignerLogoPostComment;




/*
=====================================================================================
How can use this button : ------->


           <DesignerLogoPostComment
                designerLogo={this.state.designerLogo}
                designerComments={this.state.designerComments}
                designerLikes={this.state.designerLikes}
                goToLogo={this.goToLogo}
                logoFilter={this.logoFilter}
                />


=====================================================================================

*/