import React from 'react';
import styled from 'styled-components';




const Typeahead = ({suggestions, categories, handleSelect}) => {
    const [value, setValue] = React.useState('');
    return (
    <Wrapper>
      <Input
        type='text'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            handleSelect(ev.target.value);
          }
        }}></Input>
      <ClearButton onClick={() => setValue('')}>Clear
      </ClearButton>
    </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

const Input = styled.input`
    width: 350px;
`;

const ClearButton = styled.button`
    text-decoration: none;
    color: white;
    margin-left: 10px;
    background-color: darkblue;
    border: none;
    padding: 10px;
    width: 80px;
    font-size: 15px;
    border-radius: 5px;

`;

export default Typeahead;