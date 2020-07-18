import React, { useState } from 'react';
import styled from 'styled-components';

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState('');
  return (
    <Wrapper>
      <Input
        name='search'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSelect(e.target.value);
          }
        }}
      ></Input>
      <ClearBtn>Clear</ClearBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 10px;
`;

const Input = styled.input`
  width: 60%;
  height: 2rem;
  border-radius: 5px;
`;

const ClearBtn = styled.button`
  border-radius: 5px;
  background-color: blue;
  color: white;
  border: none;
  margin-left: 5px;
  padding: 0 10px;
`;

export default Typeahead;
