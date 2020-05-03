import React from "react";
import Button from "../../components/Button";
import SearchResult from "../../components/SearchResult";
import "./home.css";

function Home() {
  const [randomDrink, setRandomDrink] = React.useState("");

  function getRandom() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((json) => {
        const drink = json.drinks;

        if (drink) {
          setRandomDrink(drink);
          //console.log(drink);
        }
      });
  }

  return (
    <div className="home-page">
      <h1>This is the home page</h1>
      <Button handleClick={(e) => getRandom()}>Generate Drink</Button>
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
