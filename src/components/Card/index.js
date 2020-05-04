import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <h3>{props.name}</h3>
        <div className="thumb-img-container">
          <img className="thumb-img" src={props.img} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
