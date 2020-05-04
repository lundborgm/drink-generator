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
          const ingredients = Object.keys(drink[0])
            .map((key) => {
              if (key.match(/strIngredient/)) {
                return drink[0][key];
              }
              return null;
            })
            .filter((item) => item);

          drink[0].ingredients = ingredients;
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
              <Card
                key={key}
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                instructions={drink.strInstructions}
                ingredients={drink.ingredients}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
