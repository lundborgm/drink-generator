import React from "react";
import Button from "../../components/Button";
import "./home.css";

function Home() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((json) => {
      console.log(json.drinks[0]);
    });

  return (
    <div className="home-page">
      <h1>This is the home page</h1>
      <Button>Generate Drink</Button>
    </div>
  );
}
export default Home;
