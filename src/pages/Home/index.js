import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 26px;

  display: flex;
  jusify-content: center;
  align-items: center;
  flex-direction: column;

  .text-container {
    padding: 0 20px;
  }

  .heading {
    font-size: 32px;
  }
`;

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
    <Wrapper>
      <div className="text-container">
        <h3 className="heading">Cocktail generator</h3>
      </div>
      <Button handleClick={() => getRandomDrink()}>Randomize</Button>
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
    </Wrapper>
  );
}
export default Home;
