import React, {Component} from 'react';

import Categories from '../../component/index/categories/categories'
import GetStarted from '../../component/index/getStarted/getStarted'
import HowWorking from '../../component/index/howWorking/howWorking';




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
                <HowWorking />
            </div>
         );
    }
}
 
export default IndexComponent;