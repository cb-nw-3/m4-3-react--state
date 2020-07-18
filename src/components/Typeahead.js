import React from "react";

import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [bookName, setBookName] = React.useState("");
  console.log(bookName);
  return (
    <>
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
