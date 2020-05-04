import React from "react";
import { Link } from "@reach/router";
import Button from "../../components/Button";
import Card from "../../components/Card";
import "./home.css";

function Home() {
  const [randomDrink, setRandomDrink] = React.useState([]);

  function getRandomDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((json) => {
        const drink = json.drinks;

        if (drink) {
          setRandomDrink(drink);
        }
      });
  }

  return (
    <div className="home-page">
      <h1>This is the home page</h1>
      <Button
        handleClick={() => getRandomDrink()}
        btnText="Generate Drink"
      ></Button>
      <div className="random-drink">
        {randomDrink &&
          randomDrink.map((drink, key) => {
            return (
              <Link key={key} to={`single/${drink.idDrink}`}>
                <Card
                  key={key}
                  name={drink.strDrink}
                  img={drink.strDrinkThumb}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
export default Home;
