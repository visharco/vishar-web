import React, {Component} from 'react';
import GetStarted from './../../component/getStarted/getStarted'
import Categories from '../../component/categories/categories';




class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <GetStarted />
                <Categories />
            </div>
         );
    }
}
 
export default IndexComponent;