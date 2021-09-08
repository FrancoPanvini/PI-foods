import React, { useState } from "react";
import { useDispatch } from "react-redux";

//? ACTIONS
import { getRecipes } from "../store/actions";

//? STYLES
import { Bar, Button, Container } from "./styles/SearchbarSC";
import { AiOutlineSearch } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

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

  //* function to dispatch refresh all recipes on click
  const handleRefresh = () => {
    dispatch(getRecipes("", dispatch));
    setSearch("");
  };

  return (
    <Container>
      <Bar
        type="text"
        id="searchbar"
        placeholder="..."
        autocomplete="off"
        value={search}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></Bar>
      <Button onClick={handleOnSearch}>
        <AiOutlineSearch />
      </Button>
      <Button onClick={handleRefresh}>
        <GrUpdate />
      </Button>
    </Container>
  );
}

export default Searchbar;
