import React from "react";
import styled from "styled-components";

import Suggestion from "./Suggestion";

const Typeahead = ({ suggestions, categories, handleSelect }) => {
  const [input, setInput] = React.useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );

  const matchedBooks = suggestions.filter((suggestion) =>
    suggestion.title.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <Wrapper>
      <SearchArea>
        <Input
          type="text"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                handleSelect(ev.target.value);
                break;
              }
              case "ArrowUp": {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                break;
              }
              case "ArrowDown": {
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                console.log(selectedSuggestionIndex);
                break;
              }
            }
          }}
        />
        <Button onClick={() => setInput("")}>Clear</Button>
      </SearchArea>

      <SuggestionList>
        {input.length >= 2 &&
          matchedBooks.map((suggestion) => {
            const category = categories[suggestion.categoryId];
            const index = matchedBooks.indexOf(suggestion);

            const isSelected = index === selectedSuggestionIndex;
            return (
              <Suggestion
                key={suggestion.id}
                input={input.toLowerCase()}
                book={suggestion}
                category={category}
                index={index}
                isSelected={isSelected}
                onClick={() => {
                  handleSelect(suggestion.title);
                }}
                onMouseEnter={() => setSelectedSuggestionIndex(index)}
              >
                {suggestion.title}
              </Suggestion>
            );
          })}
      </SuggestionList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 400px;
`;

const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: hsl(256deg, 100%, 44%);
  color: white;
  padding: 5px 10px;
  outline: none;
  border: 0;
  border-radius: 4px;
`;

const SuggestionList = styled.ul`
  margin-top: 10px;
  padding: 5px 10px;
  width: 400px;
  box-shadow: 0px 14px 46px -9px rgba(0, 0, 0, 0.75);
`;

export default Typeahead;
