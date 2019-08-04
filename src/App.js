import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes'
import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <Routes />
    </Router>  
  </div>
);

export default App;