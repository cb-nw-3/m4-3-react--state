import React from "react";
import styled from "styled-components";
import { categories } from "../data";
function Book(props) {
  const { book, handleSelect, value } = props;
  let bookSelected = book.title.toLowerCase();
  let firstHalfPosition = bookSelected.indexOf(value);
  let firstHalf = book.title.slice(0, firstHalfPosition + value.length);
  let secondHalf = book.title.slice(firstHalfPosition + value.length);
  let results = [];
  for (let i in categories) {
    results.push(categories[i]);
  }
  let category = results.filter((element) => {
    return element.id == book.categoryId;
  });
  return (
    <BookOption
      onClick={() => {
        handleSelect(book.title);
      }}
    >
      {firstHalf}
      <Prediction>{secondHalf}</Prediction>
      <Category>in {category[0].name}</Category>
    </BookOption>
  );
}

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.i`
  color: purple;
`;

const BookOption = styled.li`
  line-height: 1.75em;
  list-style-type: none;

  &: hover {
    background-color: yellow;
  }
`;

export default Book;
