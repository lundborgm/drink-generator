import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: blue;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: bold;
`;

const Button = (props) => {
  return <Btn onClick={props.handleClick}>{props.children}</Btn>;
};

export default Button;
