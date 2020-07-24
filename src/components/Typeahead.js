import React, { useState } from "react";
import styled from "styled-components";

function Typeahead({ suggestions, handleSelect }) {
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
      <div style={{ display: "flex" }}>
        <Input
          type="text"
          onKeyDown={(ev) => {
            Setvalue(ev.target.value);
            console.log(value);
          }}
        />
        <Button
          onClick={() => {
            Setvalue("");
            console.log(value);
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}

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
