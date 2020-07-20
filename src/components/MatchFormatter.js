import React from 'react';
import styled from 'styled-components';

const MatchFormatter = ({ book, string = '' }) => {
  const index = book.title.toLowerCase().indexOf(string);
  const firstHalf = book.title.slice(0, index - 1);
  const secondHalf = book.title.slice(index - 1);
  console.log(book.categoryId);

  return (
    <>
      <span>{firstHalf}</span>
      <Bold category={book.categoryId}>{secondHalf}</Bold>
    </>
  );
};

const Bold = styled.span`
  font-weight: bold;
  font-style: italic;
  &::after {
    font-weight: 400;
    content: " as ${(book) => book.category}";
  }
`;
export default MatchFormatter;
