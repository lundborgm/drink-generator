import React from "react";
import Button from "../../components/Button";
import SearchResult from "../../components/SearchResult";
import "./home.css";

function Home() {
  const [randomDrink, setRandomDrink] = React.useState([]);
  const [testArray, setTestArray] = React.useState([]);

  function getRandomDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((json) => {
        const drink = json.drinks;
        let ingredients = [];

        for (let index = 1; index < 15; index++) {
          let key = "strIngredient" + index;
          const ingredient = drink[0][key];

          ingredients.push(ingredient);
        }

        if (drink) {
          setRandomDrink(drink);
          setTestArray(ingredients);

          //   for (let index = 1; index < 15; index++) {
          //     let key = "strIngredient" + index;
          //     const ingredient = drink[0][key];

          //     ingredients.push(ingredient);
          //   }

          //setTestArray(ingredients);

          //console.log(ingredients);
        }
        console.log(ingredients);
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
              <SearchResult
                key={key}
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                instructions={drink.strInstructions}
              />
            );
          })}
      </div>
      <div>
        {testArray &&
          testArray.map((test, key) => {
            return <p key={key}>{test}</p>;
          })}
      </div>
    </div>
  );
}
export default Home;
