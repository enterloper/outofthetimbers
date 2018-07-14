import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {};

const Landing = () => (
  <div><h2>The Landing!</h2></div>
);

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;