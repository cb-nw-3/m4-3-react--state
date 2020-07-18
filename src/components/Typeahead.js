import React from 'react';
import styled from 'styled-components';

const Typeahead= ({suggestions, handleSelect}) => {
  const [value, setValue] = React.useState('');

  return (
      <>
      <BookInput
        type='text'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
                handleSelect(ev.target.value);
            }
        }}
      />
      <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
      </>
  )

}

const BookInput = styled.input`
  padding-right: 100px;
  padding-left: 10px;
  text-align: left;
`
const ClearButton = styled.button`
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  border: 1px solid darkblue;
  border-radius: 10px;
  margin-left: 10px;
`
export default Typeahead;