import React from "react";

const SearchField = (props) => {
  return (
    <div className="search-field">
      <input placeholder="Search..." onChange={props.handleChange} />
    </div>
  );
};

export default SearchField;
