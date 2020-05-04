import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const StyledCard = styled.div`
  .card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 10px;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 2px #d4d4d4;
  }

  h3 {
    margin-bottom: 10px;
  }

  .thumb-img-container {
    width: 100%;
  }

  .thumb-img {
    width: 100%;
    border-radius: 5px;
  }

  a,
  a:visited {
    text-decoration: none;
  }
`;

const Card = (props) => {
  return (
    <StyledCard>
      <Link to={`/single/${props.id}`}>
        <div className="card-container">
          <div className="card">
            <h3>{props.name}</h3>
            <div className="thumb-img-container">
              <img className="thumb-img" src={props.img} alt=""></img>
            </div>
          </div>
        </div>
      </Link>
    </StyledCard>
  );
};

export default Card;
