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
                <p>footer is ther</p>
            </div>
         );
    }
}
 
export default FooterComponent;