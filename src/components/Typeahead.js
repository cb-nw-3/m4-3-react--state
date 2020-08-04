import React from "react";
import data from "../data.js";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  // instead of (props.suggestions,props.handleSelect)
  const [value, setValue] = React.useState("");
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

  const displayedSuggestions = matchedSuggestions.map((suggestion, index) => {
    const valueIndex =
      suggestion.title.toLowerCase().indexOf(value) + value.length;
    // indexofvalue is start
    const firstHalf = suggestion.title.toLowerCase().slice(0, valueIndex);
    const secondHalf = suggestion.title.toLowerCase().slice(valueIndex);
    const selectedSuggestion =
      selectedSuggestionIndex === index ? "selected" : "";
    //whatever suggestion you are on becomes the selected item of the array
    return (
      <Li
        key={suggestion.id}
        //a property of the li
        onMouseDown={(ev) => handleSelect(suggestion.title)}
        className={selectedSuggestion}
      >
        {firstHalf}
        <strong>{secondHalf}</strong>
      </Li>
    );
  });

  const handleMoveUp = () => {
    if (selectedSuggestionIndex > 0) {
      setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
    }
  };

  const handleMoveDown = () => {
    if (selectedSuggestionIndex < displayedSuggestions.length - 1) {
      setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
          onKeyDown={(ev) => {
            // console.log(ev.key);
            switch (ev.key) {
              case "Enter": {
                handleSelect(value);
                return;
              }
              case "ArrowUp": {
                handleMoveUp();
              }
              case "ArrowDown": {
                handleMoveDown();
              }
            }
          }}
        ></input>

        <Button
          // why not add a key here
          onClick={(ev) => {
            setValue("");
          }}
        >
          Clear
        </Button>
      </div>
      {/* // example of conditional rendering */}
      {displayedSuggestions.length > 0 && <ul>{displayedSuggestions}</ul>}
    </div>
  );
};

export default Typeahead;

const Li = styled.li`
  &.selected {
    background-color: pink;
  }
  &:hover {
    background-color: yellow;
  }
`;

const Button = styled.button`
  background-color: blue;
  color: white;
`;
