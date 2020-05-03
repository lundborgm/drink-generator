import React from "react";
import { Router } from "@reach/router";
import Menu from "./components/Menu";
import "./App.css";

import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Menu />
      <h1>Hello</h1>
      <Router>
        <Home path="/" />
        <Search path="/search" />
      </Router>
    </div>
  );
}
export default App;
