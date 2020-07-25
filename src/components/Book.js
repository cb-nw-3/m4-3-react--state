import React from "react";
import styled from "styled-components";
import { categories } from "../data";
function Book(props) {
  const {
    book,
    handleSelect,
    value,
    selectedSuggestionIndex,
    listItemID,
    setValue,
    setSelectedSuggestionIndex,
  } = props;
  const isSelected = selectedSuggestionIndex;
  let bookSelected = book.title.toLowerCase();
  let firstHalfPosition = bookSelected.indexOf(value.toLowerCase());
  let firstHalf = book.title.slice(0, firstHalfPosition + value.length);
  let secondHalf = book.title.slice(firstHalfPosition + value.length);
  let results = [];
  for (let i in categories) {
    results.push(categories[i]);
  }
  let category = results.filter((element) => {
    return element.id === book.categoryId;
  });
  return (
    <BookOption
      key={listItemID}
      onMouseEnter={() => {
        setSelectedSuggestionIndex(listItemID);
      }}
      style={{
        background:
          listItemID == isSelected
            ? "hsla(50deg, 100%, 80%, 0.25)"
            : "transparent",
      }}
    >
      {firstHalf}
      <Prediction>{secondHalf}</Prediction>
      <Category> in {category[0].name}</Category>
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
  &
`;

export default Book;
