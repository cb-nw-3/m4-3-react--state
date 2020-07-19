import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 30px;
  width: 250px;
  border: 1px solid gainsboro;
  border-radius: 3px;
  padding-left: 10px;
`;

const StyledButton = styled.button`
  height: 30px;
  width: 80px;
  margin-left: 10px;
  border: none;
  color: #fff;
  background-color: #2800d1;
  border-radius: 3px;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");

  const renderedSuggestions = suggestions.filter(
    (suggestion) =>
      suggestion.title.toLowerCase().includes(value.toLowerCase()) &&
      value.length > 1
  );

  return (
    <div>
      <StyledInput
        type="text"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
        placeholder="Enter a book title"
      />
      <StyledButton onClick={() => setValue("")}>Clear</StyledButton>
      <ul>
        {renderedSuggestions.map((suggestion) => {
          return (
            <li key={suggestion.id} onClick={handleSelect(suggestion.title)}>
              {suggestion.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
//
export default Typeahead;
