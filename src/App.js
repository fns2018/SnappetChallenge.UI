import React, { Component } from 'react';

import Header from './components/common/Header';
import Results from './components/results/ResultsPage';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
