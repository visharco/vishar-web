import React, {Component} from 'react';

import Categories from '../../component/index/categories/categories'
import GetStarted from '../../component/index/getStarted/getStarted'




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