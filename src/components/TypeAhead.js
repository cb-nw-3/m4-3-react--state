import React from 'react';

import styled from 'styled-components';
import Component from './Component';
import data from '../data';

function TypeAhead(props) {
  const [value, setValue] = React.useState(null);

  return <InputContainer>
    <ComponentContainer>
      <StyledInput 
        type="text"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            alert(ev.target.value)
            // handleSelect(ev.target.value);
          }
        }}
      ></StyledInput>
      <Component data={data.books} value={value} categories={data.categories}></Component>
    </ComponentContainer>
    <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
  </InputContainer>
}

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 150px;
  width: 100%;
  text-align: center;
`
const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  border-radius: 5px;
  margin-right: 20px;
`
const ClearButton = styled.button`
  height: 30px;
  border: none;
  width: 60px;
  background-color: blue;
  border-radius: 5px;
  color: white;
`
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default TypeAhead;