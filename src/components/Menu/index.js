import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

const StyledMenu = styled.nav`
  background-color: #c8c0d1;
  margin-bottom: -1px;

  ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 30px;
    padding: 0 20px;
  }

  li {
    margin: 10px;
  }
`;

const Menu = (props) => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faGlassCheers} color="#FFFF" />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} color="#FFFF" />
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
