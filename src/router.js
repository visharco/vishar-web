import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';


import RootComponent from './root';
import IndexScreen from './container/index/index';
import CategorieScreen from './container/categories/categories';
import DesignersScreen from './container/designers/designers';
import ProjectsScreen from './container/projects/projects';
import AboutUsScreen from './container/aboutUs/aboutUs';



class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <Router history={browserHistory}>
                <Route path="/" component={RootComponent} >
                    <IndexRoute   component={IndexScreen} /> 
                    <Route   path="index" component={IndexScreen} /> 
                    <Route   path="categories" component={CategorieScreen} /> 
                    <Route   path="designers" component={DesignersScreen} /> 
                    <Route   path="projects" component={ProjectsScreen} /> 
                    <Route   path="about-us" component={AboutUsScreen} /> 
                </Route>
            </Router>
         );
    }
}
 
export default RouterComponent;