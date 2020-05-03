import React from "react";
import "./App.css";

function App() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((json) => {
      console.log(json.drinks[0]);
    });

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
export default App;
