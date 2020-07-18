import React from "react";
import styled from "styled-components";

const Typeahead = ({ data, handleSelect }) => {
  const [input, setInput] = React.useState("");

  return (
    <Wrapper>
      <Input
        type="text"
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      />
      <Button onClick={() => setInput("")}>Clear</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 5px 10px;
  margin: 0 10px;
`;

const Button = styled.button`
  background-color: hsl(256deg, 100%, 44%);
  color: white;
  padding: 5px 10px;
  outline: none;
  border: 0;
  border-radius: 4px;
`;

export default Typeahead;
