import React, { Component } from 'react';

import DesignerResult from '../../component/designerResult/designerResult';

import designerPic from './../../assets/images/pic1.png'
import search from './../../assets/icons/search.svg'

import './style.css';



class DesignersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerName: 'سارا دنیل',
            designerLevel: 'سطح ۲'
        }
    }
    render() {
        return (
            <div className="designers" >

                <div className="designers-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <h1>طراحی که میپسندی رو انتخاب کن</h1>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="designers-search" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="designers-search-box " >
                                <input type="text" />
                                <img src={search} />
                            </div>
                                <div className="designers-search-result " >
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                                    <DesignerResult
                                        designerPic={designerPic}
                                        designerName={this.state.designerName}
                                        designerLevel={this.state.designerLevel}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DesignersComponent;