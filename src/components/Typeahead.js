import React from "react";
import styled from "styled-components";
import BookList from "./BookList";
function Typeahead(props) {
  const [value, setValue] = React.useState("");
  const { suggestions, handleSelect } = props;
  let refinedSuggestions = [];
  if (value.length > 1) {
    refinedSuggestions = suggestions.filter((Element) => {
      return Element.title.toLowerCase().includes(value.toLowerCase());
    });
  }

  return (
    <InputData>
      <BookInput
        value={value}
        placeholder="The designs"
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key == "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      />
      <ClearBtn
        onClick={() => {
          setValue("");
        }}
      >
        Clear
      </ClearBtn>
      <BookList
        refinedSuggestions={refinedSuggestions}
        handleSelect={handleSelect}
      />
    </InputData>
  );
}

const InputData = styled.div`
  height: 30px;
`;

const BookInput = styled.input`
  width: 300px;
  height: 100%;
`;
const ClearBtn = styled.button`
  background-color: blue;
  color: white;
  height: 100%;
  width: 75px;
`;

export default Typeahead;
