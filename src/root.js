import React, {Component} from 'react';
import {browserHistory } from 'react-router'
 import Header from "./component/header/header";
 import Footer from "./component/footer/footer";
 
 
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

  

    
  

    render() { 
        return ( 
            <div>
                <Header />
                <div> 
                    { this.props.children}
                </div>
                <Footer />
              
            </div>
         );
    }
}
 