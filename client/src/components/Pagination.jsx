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

  //* Reset to first page when recipes changes
  useEffect(() => {
    setCurrentPage(1);
    setMaxPageDisplay(5);
    setMinPageDisplay(1);
  }, [recipesLenght]);

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
  const handleSupPrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
      setMaxPageDisplay(5);
      setMinPageDisplay(1);
    }
  };
  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      if (currentPage - 1 < minPageDisplay) {
        setMaxPageDisplay(
          maxPageDisplay - pagesDisplayLimit < 5 ? 5 : maxPageDisplay - pagesDisplayLimit
        );
        setMinPageDisplay(
          minPageDisplay - pagesDisplayLimit <= 0 ? 1 : minPageDisplay - pagesDisplayLimit
        );
      }
    }
  };
  const handleNext = () => {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageDisplay) {
        setMaxPageDisplay(maxPageDisplay + pagesDisplayLimit);
        setMinPageDisplay(minPageDisplay + pagesDisplayLimit);
      }
    }
  };
  const handleSupNext = () => {
    const lastPage = pageNumbers.length;
    if (currentPage !== lastPage) {
      setCurrentPage(lastPage);
      setMaxPageDisplay(lastPage);
      setMinPageDisplay(lastPage - pagesDisplayLimit + 1);
    }
  };

  return (
    <nav>
      {pageNumbers.length === 0 ? (
        <p></p>
      ) : (
        <PagesList>
          <PageNumber onClick={handleSupPrev}>{"<<"}</PageNumber>
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
          <PageNumber onClick={handleSupNext}>{">>"}</PageNumber>
        </PagesList>
      )}
    </nav>
  );
}

export default Pagination;
