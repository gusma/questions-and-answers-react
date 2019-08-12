import React, { Component } from 'react';
import './App.css';

import QA from './QA';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className="App">
        <QA />
      </div>
    );
  }
}

export default App;
