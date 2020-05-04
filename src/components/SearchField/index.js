import React from "react";
import styled from "styled-components";

const StyledSearchField = styled.div`
  width: 80%;

  h3 {
    font-size: 18px;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: 1px solid #9168f2;
    padding: 0px 15px;

    margin: 20px 0;
  }
`;

const SearchField = (props) => {
  return (
    <StyledSearchField>
      <h3>Search for drinks</h3>
      <input placeholder="..." onChange={props.handleChange} />
    </StyledSearchField>
  );
};

export default SearchField;
