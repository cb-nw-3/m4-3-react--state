import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = React.useState('');
  
    return (
      <>
        <Input
          type='text'
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
              handleSelect(ev.target.value);
            }
          }}
        />
  
  <ClearButton
          onClick={() => {
            setValue('');
          }}
        >
          Clear
        </ClearButton>
      </>
    );
  };

  const ClearButton = styled(Button)`
  margin-left: 10px;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

export default Typeahead;
