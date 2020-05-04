import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: pink;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const Button = (props) => {
  return <Btn onClick={props.handleClick}>{props.btnText}</Btn>;
};

export default Button;
