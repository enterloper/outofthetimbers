import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../../pages/Landing';
import StoreFront from '../../pages/StoreFront';
import About from '../../pages/About';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/store" component={StoreFront} />
      </Switch>
    </div>
  </Router>
);

export default App;
