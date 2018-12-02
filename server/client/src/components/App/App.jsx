import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../Landing';
import Header from '../Header/Header';

const About = () => <h2>About</h2>;
const Store = () => <h2>Store</h2>;

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
      </Switch>
    </div>
  </Router>
);

export default App;
