import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  jusify-content: center;
  align-items: center;
  flex-direction: column;
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
      <Button handleClick={() => getRandomDrink()}>Get random drink</Button>
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
