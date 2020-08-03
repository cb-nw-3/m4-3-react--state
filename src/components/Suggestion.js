import React from "react";
import styled from "styled-components";

const Suggestion = ({ theBook, currValue, categories, ...delegated }) => {
  const indexOfFoundValue = theBook.title
    .toLowerCase()
    .indexOf(currValue.toLowerCase());

  const firstHalf = theBook.title.slice(
    0,
    indexOfFoundValue + currValue.length
  );
  const secondHalf = theBook.title.slice(indexOfFoundValue + currValue.length);

  const category = categories[theBook.categoryId];

  return (
    <>
      <span>
        {firstHalf}
        <Prediction>{secondHalf}</Prediction>
      </span>
      <Category>{category.name}</Category>
    </>
  );
};

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.p`
  color: green;
`;

export default Suggestion;
