import React from "react";
import styled from "styled-components";
import BookListing from "./BookListing";

function Suggestion({ Book, SearchTerm, isSelected, categoryName }) {
  console.log("Book");
  console.log(Book);

  console.log(SearchTerm);
  // console.log(Book.title.toLowerCase());
  let indexOfTerm = Book.title.toLowerCase().indexOf(SearchTerm.toLowerCase());

  let sliced_string = Book.title.slice(
    indexOfTerm + SearchTerm.length,
    Book.title.length
  );

  let search_term_sliced_string = Book.title.slice(
    0,
    indexOfTerm + SearchTerm.length
  );

  // // console.log(split_title[0]);
  // // console.log(split_title[1]);

  // console.log(search_term_sliced_string);

  // console.log(sliced_string);

  // console.log("---------------------------");

  function HightlightBG(e) {
    if (e.target.parentElement.children[2] === undefined) {
      return;
    }
    if (e.target.parentElement.children[2].innerText.split(" ")[1] === "in") {
      e.target.parentElement.style.background = "hsla(50deg, 100%, 80%, 0.25)";
    }
  }

  function DeselectBG(e) {
    e.target.parentElement.style.background = "transparent";
  }

  return (
    <TotalSearchTermDiv
      style={{
        background: isSelected ? "hsla(50deg, 100%, 80%, 0.25)" : "transparent",
      }}
      onMouseOver={HightlightBG}
      onMouseOut={DeselectBG}
    >
      <SearchTermSpan>{search_term_sliced_string}</SearchTermSpan>
      <BookPredictionSpan>{sliced_string}</BookPredictionSpan>
      <CategorySpan>
        {" "}
        in <CategoryName>{categoryName}</CategoryName>
      </CategorySpan>
    </TotalSearchTermDiv>
  );
}

export default Suggestion;

const TotalSearchTermDiv = styled.div`
  padding: 5px;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: lightblue;
  }
`;

const SearchTermSpan = styled.span`
  font-weight: normal;
`;

const BookPredictionSpan = styled.span`
  font-weight: bold;
`;

const CategorySpan = styled.span`
  font-style: italic;
`;

const CategoryName = styled.span`
  font-style: italic;
  color: lightblue;
`;
