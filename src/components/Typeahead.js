import React from "react";
import styled from "styled-components";

function Typeahead(props) {
  const [value, setValue] = React.useState("");
  const { suggestions } = props;
  return (
    <BookData>
      <BookInput
        value={value}
        placeholder="The designs"
        onChange={(ev) => {
          setValue(ev.target.value);
          if (ev.target.value.length > 2) {
            refinedSuggestions = suggestions.filter((Element) =>
              Element.title.toLowerCase().includes(value)
            );
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
      <SuggestionList refinedSuggestions={refinedSuggestions} />
    </BookData>
  );
}

const SuggestionList = styled.ul``;
const Suggestion = styled.li``;
const BookData = styled.div`
  height: 30px;
  text-align: center;
`;
const BookInput = styled.input`
  height: 100%;
  width: 300px;
`;
const ClearBtn = styled.button`
  background-color: blue;
  border-radius: 5px;
  color: white;
  width: 75px;
  height: 100%;
  margin-left: 1%;
`;

export default Typeahead;
