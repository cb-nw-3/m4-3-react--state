import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  width: 300px;
  margin: 5px;
`;

const Clear = styled.button`
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  color: #fff;
  background-color: #521391;
  border: none;
  width: 70px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Suggestions = styled.ul`
  list-style-type: none;
  border-radius: 4px;
  margin-top: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 10px;
  max-width: 350px;
  cursor: pointer;
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
  display: block;
  font-style: italic;
  color: #f003fc;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [filtered, setFiltered] = React.useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );

  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          onChange={(ev) => {
            setValue(ev.target.value);
            if (value.length > 1) {
              setShowSuggestions(true);
              const temp = suggestions.filter((x) =>
                x.title.toLowerCase().includes(value.toLowerCase())
              );
              setFiltered(temp);
            } else {
              setShowSuggestions(false);
              setFiltered([]);
            }
          }}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                if (filtered.length > 0) {
                  const book = filtered[selectedSuggestionIndex];
                  handleSelect(book.title);
                }
                return;
              }
              case "ArrowUp": {
                if (filtered.length > 0) {
                  const index =
                    selectedSuggestionIndex === 0
                      ? 0
                      : selectedSuggestionIndex - 1;
                  setSelectedSuggestionIndex(index);
                }
                return;
              }
              case "ArrowDown": {
                if (filtered.length > 0) {
                  const index =
                    selectedSuggestionIndex === filtered.length - 1
                      ? filtered.length - 1
                      : selectedSuggestionIndex + 1;
                  setSelectedSuggestionIndex(index);
                }
                return;
              }
              case "Escape": {
                setShowSuggestions(false);
                setFiltered([]);
                const input = document.querySelector("input");
                input.value = "";
                setValue("");
              }
            }
          }}
          value={value}
        />
        <Clear
          type="button"
          onClick={(ev) => {
            const input = document.querySelector("input");
            input.value = "";
            setValue("");
            setShowSuggestions(false);
          }}
        >
          Clear
        </Clear>
        {showSuggestions && (
          <Suggestions>
            {filtered.map((book) => {
              const isSelected =
                filtered[selectedSuggestionIndex].id === book.id;
              const index = book.title
                .toLowerCase()
                .indexOf(value.toLowerCase());
              return (
                <ListItem
                  key={book.id}
                  style={{
                    background: isSelected
                      ? "hsla(50deg, 100%, 80%, 0.25)"
                      : "transparent",
                  }}
                  onClick={(ev) => {
                    handleSelect(book.id);
                  }}
                >
                  {book.title.substring(0, index + value.length)}
                  <Prediction>
                    {book.title.substring(
                      index + value.length,
                      book.title.length
                    )}
                  </Prediction>
                  <Category>{book.categoryId}</Category>
                </ListItem>
              );
            })}
          </Suggestions>
        )}
      </Wrapper>
    </Container>
  );
};

export default Typeahead;
