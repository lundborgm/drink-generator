import React from "react";

const SingleDrink = (props) => {
  return (
    <div className="singe-drink">
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

export default SingleDrink;
