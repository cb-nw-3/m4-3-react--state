import React from "react";
import styled from "styled-components";

import Button from "./Button";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState(""); // To update matchedSuggestion and input value.
  const [isVisible, setIsVisible] = React.useState(false); //**

  const showSuggestions = isVisible && value.length > 2;

  let maxResult = 6; // Added as part of Exercise
  // console.log(suggestions);
  // console.log(value);

  // Exercise 2 part 2
  // Used to filter in the array of suggestions the value from line 7, which is updated on each additionnal input.
  // It is very important to use the lower case version of the book title.
  let matchedSuggestions = suggestions
    .filter((suggestion) => {
      const hasEnteredEnoughCharacters = value.length >= 2; // Added as part of Exercise 3
      const includesValue = suggestion.title // For each object, the title is selected
        .toLowerCase() // Lowercased the title
        .includes(value.toLowerCase()); // Returns the item if the value is within the title.

      return hasEnteredEnoughCharacters && includesValue; // Returns the created const from the funtion.
    })
    .slice(0, maxResult); // Added as Exercise 4
  // console.log(matchedSuggestions);
  // Exercice 2 part 2

  return (
    <>
      <Wrapper>
        <Row>
          <Input
            type="text"
            value={value}
            onFocus={() => setIsVisible(true)} // Exercise 3
            onChange={(ev) => {
              setValue(ev.target.value);
              // Exercice 2 part 1

              // To confirm if input updates states.
              // console.log(ev.target.value);

              // Exercice 2 part 1
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                handleSelect(ev.target.value);
              }
            }}
          />
          <ClearButton onClick={() => setValue("")}>Clear</ClearButton>
        </Row>
        {/* Exercice 2 part 3 
        Rendered the matchedSuggestions
        */}
        {showSuggestions && (
          // Exercice 3
          <SuggestionList>
            {matchedSuggestions.map((suggestion, index) => {
              // Start Exercise 4
              const matchIndex = suggestion.title
                .toLowerCase()
                .indexOf(value.toLowerCase());
              const matchEnd = matchIndex + value.length;
              const firstHalf = suggestion.title.slice(0, matchEnd);
              const secondHalf = suggestion.title.slice(matchEnd);

              // console.log(firstHalf);
              return (
                <li
                  key={suggestion.id}
                  onClick={() => handleSelect(suggestion.title)}
                >
                  <FirstPart>{firstHalf}</FirstPart>
                  <span>{secondHalf}</span>
                  {/* End Exercise 4 */}
                </li>
              );
            })}
          </SuggestionList>
        )}
        {/* Exercice 2 part 3 */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Row = styled.div`
  /* display: flex; */
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

const ClearButton = styled(Button)`
  margin-left: 10px;
`;

const SuggestionList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
  padding: 20px;
  width: 500px;
  /* border: 1px solid goldenrod; */
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
  &:after {
    /* padding: 15px; */
  }
  & li {
    width: 100%;
    line-height: 1.6;
    padding: 15px;
    /* font-weight: 600; */
  }
  /* & li:first-child {
    background: lightyellow;
  } */
`;

const FirstPart = styled.span`
  font-weight: bold;
`;

export default Typeahead;
