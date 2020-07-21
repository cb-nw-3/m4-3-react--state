import React from "react";
import data from "../data";
import styled from "styled-components";


const Typeahead = ({ suggestions, handleSelect }) => {
  // console.log(data)
  const [value, setValue] = React.useState("");

  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
            console.log(ev);
          if (ev.key === "Enter") {
            handleSelect(ev.target.value);
          }
        }}
      />
      <ul>
        {suggestions.map((suggestion) => {
          return (
            <Suggestion key={suggestion.id} onClick={() => handleSelect(suggestion.title)}>
  {suggestion.title}
</Suggestion>

          )
        })}
      </ul>
      <Button onClick={() => setValue("")}>Clear</Button>
    </>
  );
};

export default Typeahead;

const Button = styled.button`
    background: blue;
    color: ghostwhite;
    height: 30px;
    margin-left: 5px;
    border-radius: 5px;
    width: 50px;
    border-color: blue;

`;

const Input = styled.input`
    height: 30px;
    width: 250px;
    border-radius: 5px;
    border-color: silver;
`;

const Suggestion = styled.li`
  list-style-type: circle,
`;