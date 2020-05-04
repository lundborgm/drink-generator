import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #9168f2;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 0px rgba(189, 189, 189, 1);
  outline: none;
  padding: 10px 15px;
  margin: 20px 0;
`;

const Button = (props) => {
  return <Btn onClick={props.handleClick}>{props.children}</Btn>;
};

export default Button;
