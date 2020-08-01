import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Typeahead = ({ suggestions, categories, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );

  let matchedSuggestions = suggestions.filter((suggestion) => {
    let enterEnoughChar = value.length >= 2;
    let includesTitle = suggestion.title
      .toLowerCase()
      .includes(value.toLowerCase());
    return enterEnoughChar && includesTitle;
  });
  const displayedSuggestions = matchedSuggestions.map((suggestion) => {
    return (
      <SuggestionListItem
        key={suggestion.id}
        // to keep track of what is suggested// onclick better?
        onMouseDown={(ev) => handleSelect(suggestion.title)}
      >
        {suggestion.title}
      </SuggestionListItem>
    );
  });

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onFocus={() => {
          setIsVisible(true);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            const selecetedItem = matchedSuggestions[selectedSuggestionIndex];
            console.log(selecetedItem);
            handleSelect(selecetedItem.title);
          } else if (ev.key === "ArrowUp") {
            if (selectedSuggestionIndex < matchedSuggestions.length + 1) {
              setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
            }
          } else if (ev.key === "ArrowDown") {
            if (selectedSuggestionIndex < matchedSuggestions.length - 1) {
              setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
            }
          }
        }}
      />
      <ClearButton onClick={() => setValue("")}>clear</ClearButton>
      <ul>
        {displayedSuggestions && (
          <Suggestions id="results">
            {matchedSuggestions.map((suggestion, index) => {
              console.log(categories);
              const category = categories[suggestion.categoryId];
              const isSelected = index === selectedSuggestionIndex;
              const firstLetterIndex = suggestion.title
                .toLowerCase()
                .indexOf(value.toLowerCase());
              const lastLetterIndex = firstLetterIndex + value.length - 1;
              console.log(firstLetterIndex);
              console.log(lastLetterIndex);
              const title = suggestion.title.split("");

              return (
                <>
                  <SuggestionListItem
                    style={{ background: isSelected ? "yellow" : "white" }}
                    key={suggestion.id}
                    suggestion={suggestion}
                    category={category}
                    index={index}
                    isSelected={isSelected}
                    searchValue={value}
                    onMouseEnter={() => {
                      setSelectedSuggestionIndex(index);
                    }}
                    onMouseDown={() => {
                      handleSelect(suggestion.title);
                    }}
                  >
                    {title.map((letter, index) => {
                      if (
                        index >= firstLetterIndex &&
                        index <= lastLetterIndex
                      ) {
                        return <strong>{letter}</strong>;
                      } else {
                        return letter;
                      }
                    })}
                  </SuggestionListItem>
                </>
              );
            })}
          </Suggestions>
        )}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const ClearButton = styled(Button)`
  margin-left: 10px;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

const Suggestions = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: -10px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
`;

const SuggestionListItem = styled.li`
  &:hover {
    background-color: yellow;
  }
`;

export default Typeahead;
