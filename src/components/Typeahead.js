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

const Typeahead = ({ data, handleSelect }) => {
  const [value, setValue] = React.useState("");

  return (
    <Container>
      <div>
        <Input
          type="text"
          onChange={(ev) => {
            setValue(ev.target.value);
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
          }}
        >
          Clear
        </Clear>
        <h1>{value}</h1>
      </div>
    </Container>
  );
};

export default Typeahead;
