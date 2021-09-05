import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//? ACTIONS
import { setPaginationIndexes } from "../store/actions";

//? STYLES
import { PagesList, PageNumber } from "./styles/PaginationSC";

function Pagination() {
  const dispatch = useDispatch();
  const recipesLenght = useSelector(state => state.recipes.length);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesxPage = 9;
  const indexLastRecipe = currentPage * recipesxPage;
  const indexFirstRecipe = indexLastRecipe - recipesxPage;
  const pagesDisplayLimit = 5;
  const [maxPageDisplay, setMaxPageDisplay] = useState(5);
  const [minPageDisplay, setMinPageDisplay] = useState(1);

  //* Update store with indexLastRecipe & indexFirstRecipe
  useEffect(
    () => dispatch(setPaginationIndexes(indexLastRecipe, indexFirstRecipe)),
    [indexLastRecipe, indexFirstRecipe, dispatch]
  );

  //!  a controlar cuando funcione el search
  // useEffect(() => {
  //   console.log('acas s')
  //   setCurrentPage(1);
  //   setMaxPageDisplay(5);
  //   setMinPageDisplay(1);
  // }, [recipes]);

  //* Calculate number of posssible pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(recipesLenght / recipesxPage); i++) {
    pageNumbers.push(i);
  }

  //* function to set page number by click
  const handleClick = e => {
    setCurrentPage(Number(e.target.id));
  };

  //* functions to pass to prev/next page
  const handlePrev = e => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      if (currentPage - 1 < minPageDisplay) {
        setMaxPageDisplay(maxPageDisplay - pagesDisplayLimit);
        setMinPageDisplay(minPageDisplay - pagesDisplayLimit);
      }
    }
  };
  const handleNext = e => {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageDisplay) {
        setMaxPageDisplay(maxPageDisplay + pagesDisplayLimit);
        setMinPageDisplay(minPageDisplay + pagesDisplayLimit);
      }
    }
  };

  return (
    <nav>
      <PagesList>
        <PageNumber onClick={handlePrev}>{"<"}</PageNumber>
        {pageNumbers?.map(number => {
          if (number <= maxPageDisplay && number >= minPageDisplay) {
            return (
              <PageNumber
                key={number}
                id={number}
                className={currentPage === number ? "active" : null}
                onClick={handleClick}
              >
                {number}
              </PageNumber>
            );
          } else {
            return null;
          }
        })}
        <PageNumber onClick={handleNext}>{">"}</PageNumber>
      </PagesList>
    </nav>
  );
}

export default Pagination;
