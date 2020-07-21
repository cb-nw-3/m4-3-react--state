import React from "react";

import styled from "styled-components";

import { categories } from "./../data";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [bookName, setBookName] = React.useState("");

  let matchedBookArray = suggestions.filter((book) => {
    let LowerCaseSearch = bookName.toLowerCase();
    let bookLowerCaseTitle = book.title.toLowerCase();
    if (
      bookName !== "" &&
      bookName.length >= 2 &&
      bookLowerCaseTitle.includes(LowerCaseSearch)
    ) {
      return true;
    } else {
      return false;
    }
  });

  let isMatchedBookArrayFull = matchedBookArray.length > 0;
  return (
    <>
      <div>
        <StyledInput
          type="text"
          value={bookName}
          onChange={(ev) => {
            setBookName(ev.target.value);
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(ev.target.value);
            }
          }}
        />
        <StyledButton
          onClick={() => {
            setBookName("");
          }}
        >
          Clear
        </StyledButton>
      </div>
      {isMatchedBookArrayFull && (
        <DropDown>
          {matchedBookArray.map((book, index) => {
            let lowerCaseTitle = book.title.toLowerCase();
            let lowerCaseBookName = bookName.toLowerCase();
            let indexOfSearch = lowerCaseTitle.indexOf(lowerCaseBookName);
            let indexToSlice = indexOfSearch + bookName.length;
            let firstSlice = book.title.slice(0, indexToSlice);
            let secondSlice = book.title.slice(indexToSlice);
            let CategoryName = categories[book.categoryId].name;
            return (
              <Suggestion
                key={book + index}
                onClick={() => handleSelect(book.title)}
              >
                <span>
                  {`${firstSlice}`}
                  <Prediction>{`${secondSlice}`} </Prediction>
                </span>
                <CategoryListing>
                  in
                  <Category> {CategoryName}</Category>
                </CategoryListing>
              </Suggestion>
            );
          })}
        </DropDown>
      )}
    </>
  );
};

export default Typeahead;

const StyledInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 2px;
  margin: 0 15px;
  border: 1px solid lightGrey;

  &:focus {
    /* outline: none; */
  }
`;

const StyledButton = styled.button`
  height: 30px;
  border: none;
  color: white;
  background-color: blueviolet;
  padding: 4px 15px;
  border-radius: 2px;
`;

const DropDown = styled.ul`
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  width: 350px;
  padding: 5px;
`;

const Suggestion = styled.li`
  padding: 10px 5px;
  &:hover {
    background-color: beige;
  }
`;

const Prediction = styled.span`
  font-weight: 700;
`;

const CategoryListing = styled.span`
  font-size: 0.8em;
  font-style: italic;
`;

const Category = styled.span`
  color: violet;
`;
