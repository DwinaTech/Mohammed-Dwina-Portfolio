import React from "react";
import { BrowserRouter } from "react-router";
import Routes from "./Components/Routes";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
