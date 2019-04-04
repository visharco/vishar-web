import React, {Component} from 'react';

import Categories from '../../component/index/categories/categories'
import GetStarted from '../../component/index/getStarted/getStarted'
import HowWorking from '../../component/index/howWorking/howWorking';
import OurService from '../../component/index/ourService/ourService';




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
                <OurService />
            </div>
         );
    }
}
 
export default IndexComponent;