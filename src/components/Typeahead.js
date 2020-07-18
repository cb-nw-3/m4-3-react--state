import React from "react";

import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [bookName, setBookName] = React.useState("");

  let matchedBookArray = suggestions.filter((book) => {
    let LowerCaseSearch = bookName.toLowerCase();
    let bookLowerCaseTitle = book.title.toLowerCase();
    if (bookName === "") {
      return;
    } else if (bookName.length < 2) {
      return;
    } else if (bookLowerCaseTitle.includes(LowerCaseSearch)) {
      return book;
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
            return (
              <Suggestion
                key={book + index}
                onClick={() => handleSelect(book.title)}
              >
                {book.title}
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
