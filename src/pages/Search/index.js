import React from "react";
import SearchField from "../../components/SearchField";
import Card from "../../components/Card";
import "./search.css";

function Search() {
  const [searchResult, setSearchResult] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    if (!searchText) {
      return;
    }
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    )
      .then((res) => res.json())
      .then((json) => {
        const drinks = json.drinks;

        if (drinks) {
          setSearchResult(drinks);
        } else {
          setSearchResult(null);
        }
      });
  }, [searchText]);

  return (
    <div className="search-page">
      <h1>This is the search page</h1>
      <SearchField
        handleChange={(event) => setSearchText(event.target.value)}
      />
      <div className="search-results">
        {searchResult &&
          searchText &&
          searchResult.map((drink, key) => {
            return (
              <Card
                key={key}
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                id={drink.idDrink}
              />
            );
          })}
        {searchResult == null && <p>Ooops... no results for "{searchText}".</p>}
      </div>
    </div>
  );
}
export default Search;
