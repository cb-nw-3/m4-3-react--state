import React from "react";
import styled from "styled-components";

function Suggestion({ Book }) {
  console.log(Book);
  return <BookDiv>{Book.title}</BookDiv>;
}

export default Suggestion;

const BookDiv = styled.div`
  padding: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightblue;
  }
`;
