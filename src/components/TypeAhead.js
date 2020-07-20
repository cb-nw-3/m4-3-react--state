import React from 'react';

import styled from 'styled-components';

function TypeAhead(props) {
  const [value, setValue] = React.useState(null);

  return <InputContainer>
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
  width: 240px;
  border-radius: 5px;
`
const ClearButton = styled.button`
  height: 30px;
  border: none;
  width: 60px;
  background-color: blue;
  border-radius: 5px;
  color: white;
  margin-left: 20px;
`

export default TypeAhead;