import React from "react";
import "./search-panel.css";

const SearchPanel = (props) => {

  const { onSearch } = props;

  return <input 
    className="form-control search-input" 
    type="text"
    placeholder="type to search" 
    onChange={ ({ target: { value } }) => { onSearch(value) } }/>;
};

export default SearchPanel;