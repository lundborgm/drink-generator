import React from "react";

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
      <Button
        handleClick={() => getRandomDrink()}
        btnText="Shake Drink"
      ></Button>
      {randomDrink &&
        randomDrink.map((drink, key) => {
          return (
            <Card
              key={key}
              name={drink.strDrink}
              img={drink.strDrinkThumb}
              id={drink.idDrink}
            />
          );
        })}
    </div>
  );
}
export default Home;
