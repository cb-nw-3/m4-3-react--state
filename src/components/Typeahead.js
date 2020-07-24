import React from "react";
import styled from "styled-components";

function Typeahead() {
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
        <Input type="text" />
        <Button>Clear</Button>
      </div>
    </div>
  );
}

const Input = styled.input`
  border: 2px solid #eaeaea;
  width: 300px;
  border-radius: 5px;
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
