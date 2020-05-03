import React from "react";
import "./search.css";

function Search() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });

  return (
    <div className="search-page">
      <h1>This is the search page</h1>
    </div>
  );
}
export default Search;
