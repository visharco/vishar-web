import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';


import RootComponent from './root';
import IndexScreen from './container/index/index';
import CategorieScreen from './container/categories/categories';
import DesignersScreen from './container/designers/designers';
import ProjectsScreen from './container/projects/projects';
import AboutUsScreen from './container/aboutUs/aboutUs';
import ContactUsScreen from './container/contactUs/contactUs';
import ProfileScreen from './container/profile/profile';
import DesignerDesignScreen from './container/designerDesign/designerDesign';



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
                    <Route   path="aboutUs" component={AboutUsScreen} /> 
                    <Route   path="contactUs" component={ContactUsScreen} /> 
                    <Route   path="profile" component={ProfileScreen} /> 
                    <Route   path="designs" component={DesignerDesignScreen} /> 
                </Route>
            </Router>
         );
    }
}
 
export default RouterComponent;