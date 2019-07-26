import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes'
import './App.scss';

const App = () => (
  <div className="App">
    <div>
      <Router>
        <Routes />
      </Router>  
    </div>
  </div>
);

export default App;