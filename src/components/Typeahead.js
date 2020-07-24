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
        <BookDisplay suggestion={suggestion} value={value} />
      </div>
    </div>
  );
}

const BookDisplay = ({ suggestion, value }) => {
  console.log(value);
  if (value.length !== 0) {
    return (
      <ul>
        {suggestion.map((book) => {
          if (book.id.includes(value)) {
            return <li>{book.id}</li>;
          }
        })}
      </ul>
    );
  } else {
    return <div></div>;
  }
};

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
