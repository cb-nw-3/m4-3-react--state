import React from "react";
import data, { categories } from "../data";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  // console.log(data)
  const [value, setValue] = React.useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );
  const matchedSuggestions = suggestions.filter((suggestion) => {
    return suggestion.title.includes(value);
  });
  const selectedSuggestion = matchedSuggestions[selectedSuggestionIndex];

  return (
    <>
      <Top>
        <Div>
          <Input
            type="text"
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => {
              // if (ev.key === "Enter") {
              //   handleSelect(ev.target.value);
              // }
              switch (ev.key) {
                case "Enter": {
                  console.log(selectedSuggestion);
                  handleSelect(selectedSuggestion.title);
                  break;
                }
                case "ArrowUp": {
                  setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                  break;
                }
                case "ArrowDown": {
                  setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                  break;
                }
              }
            }}
          />
          <Button onClick={() => setValue("")}>Clear</Button>
        </Div>
        <Div2>
          {value.length >= 2 && (
            <Ul>
              {matchedSuggestions.map((suggestion, index) => {
                const matchedIndex =
                  suggestion.title.indexOf(value) + value.length;
                const firstHalf = suggestion.title.slice(0, matchedIndex);
                const secondHalf = suggestion.title.slice(matchedIndex);
                const categoryId = suggestion.categoryId;
                const isSelected = selectedSuggestionIndex === index + 1;
                return (
                  <Wrap>
                    <Suggestion
                      key={suggestion.id}
                      style={{
                        background: isSelected
                          ? "hsla(50deg, 100%, 80%, 0.25)"
                          : "transparent",
                      }}
                      onClick={() => handleSelect(suggestion.title)}
                    >
                      {firstHalf}
                      <Prediction>{secondHalf}</Prediction>
                      <Category> in {categoryId} </Category>
                    </Suggestion>
                  </Wrap>
                );
              })}
            </Ul>
          )}
        </Div2>
      </Top>
    </>
  );
};

const Button = styled.button`
  background: blue;
  color: ghostwhite;
  height: 30px;
  margin-left: 5px;
  border-radius: 5px;
  width: 50px;
  border-color: blue;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

const Ul = styled.ul`
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);

  border: 2px silver solid;
  border-radius: 5px;
`;

const Wrap = styled.div`
  padding: 10px;
`;

const Suggestion = styled.li`
  list-style-type: none;
  :hover {
    background-color: beige;
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
  font-style: italic;
  color: purple;
`;

const Div = styled.div``;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div``;

export default Typeahead;
