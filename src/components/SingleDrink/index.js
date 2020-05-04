import React from "react";
import styled from "styled-components";

const StyledSingleDrink = styled.div`
  .single-drink-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 28px;
  }

  h3 {
    margin-top: 20px;
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }

  img {
    width: 100%;
  }

  .drink-information-wrapper {
    padding: 20px;
  }

  .drink-information {
    width: 100%;
    margin: 5px 0 25px 0;
  }

  .ingredients {
  }
`;

const SingleDrink = (props) => {
  return (
    <StyledSingleDrink>
      <div className="single-drink-container">
        <img src={props.img} alt=""></img>
        <div className="drink-information-wrapper">
          <h2>{props.name}</h2>
          <div className="drink-information">
            <h3>Ingredients:</h3>
            <div className="ingredients">
              {props.drinkInfo &&
                props.drinkInfo.map((drink, key) => {
                  return <p key={key}>{drink}</p>;
                })}
            </div>
            <h3>Do this:</h3>
            <p>{props.instructions}</p>
          </div>
        </div>
      </div>
    </StyledSingleDrink>
  );
};

export default SingleDrink;
