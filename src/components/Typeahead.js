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
  &:hover {
    background-color: #fff9cf;
  }
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          onChange={(ev) => {
            setValue(ev.target.value);
            if (value.length > 1) {
              setShowSuggestions(true);
            } else {
              setShowSuggestions(false);
            }
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(ev.key);
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
            {suggestions.map((book) => {
              const match = book.title
                .toLowerCase()
                .includes(value.toLowerCase());
              if (match) {
                return (
                  <ListItem
                    key={book.id}
                    onClick={(ev) => {
                      handleSelect(book.id);
                    }}
                  >
                    {book.title}
                  </ListItem>
                );
              }
            })}
          </Suggestions>
        )}
      </Wrapper>
    </Container>
  );
};

export default Typeahead;
