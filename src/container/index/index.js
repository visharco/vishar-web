import React, {Component} from 'react';

import Categories from '../../component/categories/categories';




class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>Welcome to Index</p>
                <Categories />
            </div>
         );
    }
}
 
export default IndexComponent;