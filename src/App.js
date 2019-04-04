import React, { Component } from 'react';
import './App.css';

import Header from './component/header/header';
import GetStarted from './component/getStarted/getStarted'
import Index from '../src/container/index';
import Footer from './component/footer/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GetStarted />
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
