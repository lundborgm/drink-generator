import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <h3>{props.name}</h3>
      <img src={props.img} alt=""></img>
      <div className="drink-information">
        <p>{props.instructions}</p>
        {props.ingredients &&
          props.ingredients.map((ingredient, key) => {
            return <p key={key}>{ingredient}</p>;
          })}
      </div>
    </div>
  );
};

export default Card;
