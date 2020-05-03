import React from "react";
import "./searchResult.css";

const SearchResult = (props) => {
  return (
    <div className="search-result">
      <div className="">
        <h3>{props.name}</h3>
        <img src={props.img} alt=""></img>
        <p>{props.instructions}</p>
      </div>
    </div>
  );
};

export default SearchResult;
