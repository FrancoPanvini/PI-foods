import React, { useState } from "react";
import { useDispatch } from "react-redux";

//? ACTIONS
import { getRecipes } from "../store/actions";

//? STYLES
import { Bar, Button } from "./styles/SearchbarSC";

function Searchbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  //* function to set search on change
  const onChange = event => {
    setSearch(event.target.value.toLowerCase());
  };

  //* function to dispatch search on Enter
  const onKeyPress = event => {
    if (event.charCode === 13) {
      dispatch(getRecipes(search, dispatch));
      setSearch("");
    }
  };

  //* function to dispatch search on click
  const handleOnSearch = () => {
    dispatch(getRecipes(search, dispatch));
    setSearch("");
  };

  return (
    <React.Fragment>
      <Bar
        type="text"
        id="searchbar"
        placeholder="search..."
        autocomplete="off"
        value={search}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></Bar>
      <Button onClick={handleOnSearch}>lupa</Button>
    </React.Fragment>
  );
}

export default Searchbar;
