import React from "react";
import styled from "styled-components";

function BookList(props) {
  const { refinedSuggestions, handleSelect } = props;
  return refinedSuggestions.map((element) => {
    return (
      <Book
        onClick={() => {
          handleSelect(element.title);
        }}
      >
        {element.title}
      </Book>
    );
  });
}
const Book = styled.li`
  line-height: 1.75em;
  list-style-type: none;

  &: hover {
    background-color: yellow;
  }
`;

export default BookList;
