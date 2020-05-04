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

          drink[0].ingredients = ingredients;

          setSingleDrink(drink);
          console.log(drink);
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
              ingredients={drink.ingredients}
            />
          );
        })}
    </div>
  );
}

export default Single;
