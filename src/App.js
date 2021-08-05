import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes";

const App = () => (
  <div className="App">
    <Router>
      <Routes />
    </Router>
  </div>
);

export default App;
