import React from "react";
import { Router } from "@reach/router";
import Menu from "./components/Menu";
import "./App.css";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Single from "./pages/Single";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Router>
          <Home path="/" />
          <Search path="/search" />
          <Single path="/single/:id" />
        </Router>
      </div>
    </div>
  );
}
export default App;
