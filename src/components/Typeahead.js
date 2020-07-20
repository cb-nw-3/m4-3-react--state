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
`;

const StyledLi = styled.li`
  padding: 10px;
`;

const Typeahead = ({ suggestions, handleSelect, categories }) => {
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
          console.log(ev.key);
          switch (ev.key === "Enter") {
            case "Enter":
              handleSelect(ev.target.value);
              break;
            case "ArrowDown":
              //do something
              break;
          }
        }}
        placeholder="Enter a book title"
      />
      <StyledButton onClick={() => setValue("")}>Clear</StyledButton>
      <StyledUl>
        {renderedSuggestions.map((suggestion) => {
          const index = suggestion.title
            .toLowerCase()
            .indexOf(value.toLowerCase());

          const end = index + value.length;

          const firstHalf = suggestion.title.slice(0, index);
          const secondHalf = suggestion.title.slice(end);

          const category = categories[suggestion.categoryId].name;

          if (value.length > 1) {
            return (
              <StyledLi
                key={suggestion.id}
                onClick={handleSelect(suggestion.title)}
              >
                <span style={{ fontWeight: "bold" }}>{firstHalf}</span>
                <span>{value}</span>
                <span style={{ fontWeight: "bold" }}>{secondHalf}</span>
                <span
                  style={{
                    fontStyle: "italic",
                    color: "purple",
                  }}
                >
                  <span style={{ color: "#000" }}>{` in `}</span>
                  {category}
                </span>
              </StyledLi>
            );
          }
        })}
      </StyledUl>
    </div>
  );
};

export default Typeahead;
