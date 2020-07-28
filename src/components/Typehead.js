import React from "react";
import styled from "styled-components";

const Typehead = ({ suggestions, handleSelect, categories }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );

  let searchTermLowerCase = searchTerm.toLowerCase();
  const matchingSuggestions = suggestions.filter((suggestion) => {
    let suggestedTitleLowerCase = suggestion.title.toLowerCase();
    if (searchTerm.length >= 2) {
      return suggestedTitleLowerCase.includes(searchTermLowerCase);
    }
    return;
  });

  const selectedSuggestion = matchingSuggestions[selectedSuggestionIndex];

  return (
    <>
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        onKeyDown={(event) => {
          switch (event.key) {
            case "Enter": {
              handleSelect(selectedSuggestion.title);
              return;
            }
            case "ArrowUp": {
              setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
              return;
            }
            case "ArrowDown": {
              setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
              return;
            }
          }
        }}
      />
      {matchingSuggestions.length > 0 && (
        <StyledSuggestionList>
          {matchingSuggestions.map((suggestion, index) => {
            let suggestionLowerCase = suggestion.title.toLowerCase();
            let indexOfSearchTerm =
              suggestionLowerCase.indexOf(searchTermLowerCase) +
              searchTermLowerCase.length;
            let stringStart = suggestion.title.slice(0, indexOfSearchTerm);
            let stringEnd = suggestion.title.slice(indexOfSearchTerm);
            const category = categories[suggestion.categoryId].name;
            const isHighlighted = index === selectedSuggestionIndex;

            return (
              <StyledSuggestion
                key={suggestion.id}
                onClick={() => handleSelect(suggestion.title)}
                onMouseEnter={() => setSelectedSuggestionIndex(index)}
                style={{ background: isHighlighted && "lightyellow" }}
              >
                <span>
                  {stringStart}
                  <Prediction>{stringEnd}</Prediction>
                  <Category> in {category}</Category>
                </span>
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
  position: absolute;
  width: 300px;
  top: 100%;
  left: 40.5%;
  box-shadow: 0px 0px 20px 0px rgba(46, 74, 117, 0.5);
`;

const StyledSuggestion = styled.li`
  padding: 10px 5px;
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
  font-style: italic;
  font-size: 12px;
  color: purple;
`;

export default Typehead;
