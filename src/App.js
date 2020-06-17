import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';

// import project component

export default class App extends Component{

  render(){
    return(
      <Router>
        <div classname="App">
          {/* <Route path="/" component={Projects}> */}
        </div>
      </Router> 
    )
  }
}

export default App;
