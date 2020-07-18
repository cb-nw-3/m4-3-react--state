import React from "react";
import styled from "styled-components";

const Suggestion = ({ book, onClick }) => {
  return (
    <Wrapper key={book.id} onClick={onClick}>
      {book.title}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 5px;

  &:hover {
    background-color: yellow;
  }
`;

export default Suggestion;
