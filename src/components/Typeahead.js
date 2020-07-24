import React, { useState } from "react";
import styled from "styled-components";

function Typeahead({ suggestion, handleSelect }) {
  const [value, Setvalue] = useState("");
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <Input
            type="text"
            onChange={(ev) => {
              Setvalue(ev.target.value);
            }}
          />
          <Button
            onClick={() => {
              Setvalue("");
            }}
          >
            Clear
          </Button>
        </div>
        <BookDisplay
          suggestion={suggestion}
          value={value}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
}

const BookDisplay = ({ suggestion, value, handleSelect }) => {
  let suggestionArray = suggestion.filter((book) => {
    return book.id.includes(value);
  });

  if (value.length !== 0) {
    return (
      <BookListContainer>
        {suggestionArray.map((book) => {
          return (
            <Suggestion key={book.id} onClick={() => handleSelect(book.id)}>
              {book.id}{" "}
              <span
                style={{
                  fontSize: "0.7em",
                  fontStyle: "italic",
                  color: "#2701d2",
                }}
              >
                in {book.categoryId}
              </span>
            </Suggestion>
          );
        })}
      </BookListContainer>
    );
  } else {
    return <div></div>;
  }
};

const Suggestion = styled.li`
  list-style: none;
  padding: 10px 5px;

  &:hover {
    background: #fefbe6;
    cursor: pointer;
  }
`;

const BookListContainer = styled.ul`
  margin-top: 10px;
  width: 300px;
  box-shadow: 0px 0px 10px #eaeaea;
`;

const Input = styled.input`
  border: 2px solid #eaeaea;
  width: 300px;
  border-radius: 5px;
  padding-left: 10px;
`;

const Button = styled.button`
  background: #2701d2;
  color: white;
  border-radius: 5px;
  margin-left: 10px;
  border: 0px;
  padding: 10px 20px;
`;

export default Typeahead;
