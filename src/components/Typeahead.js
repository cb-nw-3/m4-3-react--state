import React from "react";
import data from "../data";
import styled, { css } from "styled-components";

import Suggestion from "./Suggestion";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const matchedSuggestions = suggestions.filter(function (ele) {
    if (ele.title.toLowerCase().includes(value.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      />
      <ul>
        {matchedSuggestions.map((suggestion) => {
          console.log(suggestion);
          return (
            <li
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.title)}
            >
              <Suggestion
                splitTitle={suggestion.title.split()}
                suggestion={suggestion}
                searchValue={value}
                category={suggestion.categoryId}
                key={suggestion.id}
                index={suggestion.index}
                isSelected={suggestion.isSelected}
                onClick={() => handleSelect(suggestion.title)}
              ></Suggestion>
            </li>
          );
        })}
      </ul>
      <Button onClick={() => setValue("")}>Clear</Button>
    </>
  );
};

const Button = styled.button`
  width: 100px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: lightskyblue;
`;

//const Suggestion = styled.div``;

export default Typeahead;
