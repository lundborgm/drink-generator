import React from "react";
import Button from "../../components/Button";
import SearchResult from "../../components/SearchResult";
import "./home.css";

function Home() {
  const [randomDrink, setRandomDrink] = React.useState([]);

  let ingredients = [];

  function getRandom() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((json) => {
        const drink = json.drinks;

        if (drink) {
          setRandomDrink(drink);

          for (let index = 1; index < 15; index++) {
            let key = "strIngredient" + index;
            const ingredient = drink[0][key];

            ingredients.push(ingredient);
          }

          console.log(ingredients);
        }
      });
  }

  return (
    <div className="home-page">
      <h1>This is the home page</h1>
      <Button handleClick={() => getRandom()}>Generate Drink</Button>
      <div className="random-drink">
        {randomDrink &&
          randomDrink.map((drink, key) => {
            return (
              <SearchResult
                key={key}
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                instructions={drink.strInstructions}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
