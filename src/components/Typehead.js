import React from "react";
import styled from "styled-components";

const Typehead = ({ suggestions, handleSelect }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const matchingSuggestions = suggestions.filter((suggestion) => {
    let searchTermLowerCase = searchTerm.toLowerCase();
    let suggestedTitleLowerCase = suggestion.title.toLowerCase();
    if (searchTerm.length >= 2) {
      return suggestedTitleLowerCase.includes(searchTermLowerCase);
    }
    return;
  });
  return (
    <>
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            console.log(event.target.value);
            handleSelect(event.target.value);
          }
        }}
      />
      {matchingSuggestions.length > 0 && (
        <StyledSuggestionList>
          {matchingSuggestions.map((suggestion) => {
            return (
              <StyledSuggestion
                key={suggestion.id}
                onClick={() => handleSelect(suggestion.title)}
              >
                {suggestion.title}
              </StyledSuggestion>
            );
          })}
        </StyledSuggestionList>
      )}
      <StyledButton onClick={() => setSearchTerm("")}>Clear</StyledButton>
    </>
  );
};

const StyledInput = styled.input`
  height: 35px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  border: 1px solid grey;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  height: 35px;
  width: 60px;
  background: #2b00d7;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  border: none;
`;

const StyledSuggestionList = styled.ul`
  width: 300px;
  box-shadow: 0px 0px 20px 0px rgba(46, 74, 117, 0.5);
`;

const StyledSuggestion = styled.li`
  padding: 10px 5px;
  &:hover {
    background: lightyellow;
  }
`;

export default Typehead;
