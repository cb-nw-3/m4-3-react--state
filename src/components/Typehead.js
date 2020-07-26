import React from "react";
import styled from "styled-components";

const Typehead = ({ data, handleSelect }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <>
      <StyledInput
        type="text"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            console.log(event.target.value);
            handleSelect(event.target.value);
          }
        }}
      />
      <StyledButton onClick={() => setSearchTerm("")}>Clear</StyledButton>
    </>
  );
};

const StyledInput = styled.input`
  height: 35px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  border: 1px solid grey;
  border-radius: 4px;
`;
const StyledButton = styled.button`
  height: 35px;
  width: 60px;
  background: #2b00d7;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  border: none;
`;

export default Typehead;
