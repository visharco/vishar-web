import React,{Component} from 'react';

import './style.css';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <p>header is ther</p>
            </div>
         );
    }
}
 
export default HeaderComponent;