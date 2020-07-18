import React from 'react';
import styled from 'styled-components';

const Typeahead = (props) => {
  return (
    <Wrapper>
      <Input></Input>
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
`;

const ClearBtn = styled.button`
  border-radius: 4px;
  background-color: blue;
  color: white;
  border: none;
  margin-left: 5px;
  padding: 0 10px;
`;

export default Typeahead;
