import React from "react";
import "./button.css";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.btnText}</button>;
};

export default Button;
