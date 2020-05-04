import React from "react";
import SingleDrink from "../../components/SingleDrink";

function Single() {
  const [singleDrink, setSingleDrink] = React.useState([]);
  const path = window.location.pathname;
  const id = path.split("/").pop();

  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
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

          const measures = Object.keys(drink[0])
            .map((key) => {
              if (key.match(/strMeasure/)) {
                return drink[0][key];
              }
              return null;
            })
            .filter((item) => item);

          const result = {};
          measures.forEach((key, i) => (result[key] = ingredients[i]));

          const drinkInfo = Object.keys(result).map((key, i) => {
            return `${key} ${result[key]}`;
          });
          drink[0].drinkInfo = drinkInfo;

          setSingleDrink(drink);
        }
      });
  }, [id]);

  return (
    <div className="single-page">
      {singleDrink &&
        singleDrink.map((drink, key) => {
          return (
            <SingleDrink
              key={key}
              name={drink.strDrink}
              img={drink.strDrinkThumb}
              instructions={drink.strInstructions}
              drinkInfo={drink.drinkInfo}
            />
          );
        })}
    </div>
  );
}

export default Single;
