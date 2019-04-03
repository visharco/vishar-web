import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';

import IndexScreen from './container/index/index';



class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <Router history={browserHistory}>
                <Route path="/">
                    <IndexRoute   component={IndexScreen} /> 
                    {/* <Route   path="dashboard" component={DashboardScreen} />  */}
                </Route>
            </Router>
         );
    }
}
 
export default RouterComponent;