import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Header from './component/header/header';
import Index from '../src/container/index';
import Footer from './component/footer/footer';


class App extends Component {

  constructor(){
    super()
    AOS.init();
 

    }


  render() {
    return (
      <div className="App">
        <Header />
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
