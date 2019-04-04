import React,{Component} from 'react';

import './style.css';


class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <div className="container">
                    <div className="footer-split ">
                        <h1>عضویت در خبرنامه</h1>
                    </div>

                    <div className="footer-split ">
                        <h1>منوها</h1>
                        <div className="footer-menu">
                            <ul>
                                <li>درباره ما</li>
                                <li>بلاگ</li>
                                <li>تماس باما</li>
                            </ul>
                            <ul>
                                <li>گتگوری ها</li>
                                <li>طراحان</li>
                                <li>پروژه ها</li>
                            </ul>
                 
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default FooterComponent;