import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  border: 1px solid gainsboro;
  border-radius: 3px;
  padding-left: 10px;
`;

const StyledButton = styled.button`
  height: 30px;
  width: 100px;
  margin-left: 10px;
  border: none;
  color: #fff;
  background-color: #2800d1;
  border-radius: 3px;
`;

const StyledUl = styled.ul`
  width: 410px;
  box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const Suggestion = styled.li`
  padding: 20px;
`;

const Typeahead = ({ suggestions, handleSelect, categories }) => {
  const [value, setValue] = React.useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );
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
          switch (ev.key) {
            case "Enter":
              handleSelect(ev.target.value);
              return;

            case "ArrowUp":
              setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
              console.log(selectedSuggestionIndex);
              return;

            case "ArrowDown":
              setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
              return;
          }
        }}
        placeholder="Enter a book title"
      />
      <StyledButton onClick={() => setValue("")}>Clear</StyledButton>
      <StyledUl
        style={{
          visibility: renderedSuggestions.length > 1 ? "visible" : "hidden",
        }}
      >
        {renderedSuggestions.map((suggestion, index) => {
          const category = categories[suggestion.categoryId].name;
          const prediction = suggestion.title.slice(value.length);
          const userInput = suggestion.title.slice(0, value.length);

          if (value.length > 1) {
            return (
              <Suggestion
                key={suggestion.id}
                onClick={handleSelect(suggestion.title)}
                style={{
                  background:
                    index + 1 === selectedSuggestionIndex
                      ? "hsla(50deg, 100%, 80%, 0.25)"
                      : "transparent",

                  cursor:
                    index + 1 === selectedSuggestionIndex
                      ? "pointer"
                      : "default",
                }}
                onMouseEnter={() => setSelectedSuggestionIndex(index + 1)}
              >
                <span>{userInput}</span>
                <span style={{ fontWeight: "bold" }}>{prediction}</span>

                <span
                  style={{
                    fontStyle: "italic",
                    color: "purple",
                  }}
                >
                  <span style={{ color: "#000" }}>{` in `}</span>
                  {category}
                </span>
              </Suggestion>
            );
          }
        })}
      </StyledUl>
    </div>
  );
};

export default Typeahead;
