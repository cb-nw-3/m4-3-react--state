import React from "react";
import styled from "styled-components";
function BookList(props) {
  const { refinedSuggestions, handleSelect, setValue } = props;
  {
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
}

const Book = styled.li`
  line-height: 1.75em;
  &:hover {
    background-color: yellow;
  }
  list-style-type: none;
`;

export default BookList;
