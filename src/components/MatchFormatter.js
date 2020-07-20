import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';

const MatchFormatter = ({ book, string = '' }) => {
  const index = book.title.toLowerCase().indexOf(string);
  const firstHalf = book.title.slice(0, index - 1);
  const secondHalf = book.title.slice(index - 1);
  let textCategory = '';
  if (book.categoryId !== undefined) {
    // textCategory = ' as ' + categories[book.categoryId].name;
    console.log(categories[book.categoryId].name);
  }
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

// content: "${textCategory}"
