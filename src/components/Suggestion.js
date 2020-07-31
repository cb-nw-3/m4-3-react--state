import React from "react";
import styled from "styled-components";

function Suggestion({ Book, SearchTerm, isSelected, categoryName }) {
  let charIndexOfSearchTerm = Book.title
    .toLowerCase()
    .indexOf(SearchTerm.toLowerCase());

  //console.log(charIndexOfSearchTerm);

  let sliced_string = Book.title.slice(
    charIndexOfSearchTerm + SearchTerm.length,
    Book.title.length
  );

  let search_term_sliced_string = Book.title.slice(
    0,
    charIndexOfSearchTerm + SearchTerm.length
  );

  return (
    <TotalSearchTermDiv
      style={{
        background: isSelected ? "hsla(50deg, 100%, 80%, 0.25)" : "transparent",
      }}
      // onMouseOver={HightlightBG}
      // onMouseOut={DeselectBG}
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

const TotalSearchTermDiv = styled.div`
  padding: 5px;
  font-family: "Roboto", sans-serif;
  user-select: none;
`;

const SearchTermSpan = styled.span`
  font-weight: normal;
  user-select: none;
`;

const BookPredictionSpan = styled.span`
  font-weight: bold;
  user-select: none;
`;

const CategorySpan = styled.span`
  font-style: italic;
  user-select: none;
`;

const CategoryName = styled.span`
  font-style: italic;
  color: lightblue;
  user-select: none;
`;

export default Suggestion;
