import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        YODA!
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
