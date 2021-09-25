import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Kontakt from './components/pages/Kontakt';
import Kolaci from './components/pages/Kolaci';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/kontakt' component={Kontakt} />
          <Route path='/kolaci' component={Kolaci} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
