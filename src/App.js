import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  </div>
);

export default App;