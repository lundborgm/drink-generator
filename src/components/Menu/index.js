import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

const StyledMenu = styled.nav`
  ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 34px;
    padding: 0 20px;
  }

  li {
    margin: 10px;
  }

  .go-back {
    position: absolute;
    top: 0;
    left: 0;
    order: -1;
  }
`;

const Menu = (props) => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faGlassCheers} />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
