import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';

function App() {
  return (
    <Router>
      <div>
        <h1>AutoDiscover: Explore, Compare and Review Cars</h1>
        <Switch>
          <Route path="/" exact component={CarList} />
          <Route path="/car/:id" component={CarDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
