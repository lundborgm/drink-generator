import React from "react";
import styled from "styled-components";

const StyledSingleDrink = styled.div`
  .single-drink-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2,
  h3 {
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px 8px 1px #d4d4d4;
  }

  .drink-information-wrapper {
    padding: 20px;
  }

  .drink-information {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px 0 25px 0;
  }

  .ingredients {
    border-left: 4px dotted black;
    padding-left: 10px;
  }
`;

const SingleDrink = (props) => {
  return (
    <StyledSingleDrink>
      <div className="single-drink-container">
        <h2>{props.name}</h2>
        <img src={props.img} alt=""></img>
        <div className="drink-information-wrapper">
          <h3>Ingredients</h3>
          <div className="drink-information">
            <div className="measures">
              {props.measures &&
                props.measures.map((measure, key) => {
                  return <p key={key}>{measure}</p>;
                })}
            </div>
            <div className="ingredients">
              {props.ingredients &&
                props.ingredients.map((ingredient, key) => {
                  return <p key={key}>{ingredient}</p>;
                })}
            </div>
          </div>
          <p>{props.instructions}</p>
        </div>
      </div>
    </StyledSingleDrink>
  );
};

export default SingleDrink;
