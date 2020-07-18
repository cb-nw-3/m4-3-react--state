import React from 'react';
import styled from 'styled-components';

const Typeahead = ({ suggestions, handleSelect }) => {

  const [value, setValue] = React.useState('');

  return(
    <Wrapper>
      {/* {This was just to show that i can access the books} */}
      {/* <select> 
        <option selected="selected" disabled="disabled">Choose a book</option>
      {suggestions.map(book => (
        <option>{book.title}</option>
      ))}
      </select> */}
      <InputContainer>
        <Input 
            type="text" 
            value={value}
            onChange = {(event => setValue(event.target.value))}
            onKeyDown = {(event => console.log(event.key))}
          />
          {/* {console.log(value)} */}
          <Clear onClick = {() => setValue('')}>Clear</Clear>
      </InputContainer>


    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 5px solid goldenrod;
`;

const InputContainer = styled.div`
  display: flex;
  /* border: 1px solid goldenrod; */
  padding: 50px;
  border-radius: 12px;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 500px;
  height: 50px;
  font-size: 22px;
  outline: none;
  border: 2px solid grey;
  border-radius: 12px;

  &:focus {
    /* background: salmon; */
  }
`;

const Clear = styled.button`
  width: 100px;
  margin-left: 10px;
  border-radius: 10px;
  color: white;
  font-size: 22px;
  background-color: #4C0CD4;
  border: none;
  outline: none;

  &:hover {
    background: #FF0073;
    outline: none;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Typeahead;