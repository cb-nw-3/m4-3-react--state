import React from "react";
import styled from "styled-components";
import BookListing from "./BookListing";

function Suggestion({ Book, SearchTerm, isSelected }) {
  // console.log("Book");

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

  console.log(search_term_sliced_string);

  console.log(sliced_string);

  // console.log("---------------------------");

  return (
    <TotalSearchTermDiv
      style={{
        background: isSelected ? "hsla(50deg, 100%, 80%, 0.25)" : "transparent",
      }}
    >
      <SearchTermSpan>{search_term_sliced_string}</SearchTermSpan>
      <BookPredictionSpan>{sliced_string}</BookPredictionSpan>
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
