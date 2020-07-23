import React from 'react';

import styled from 'styled-components';
import Component from './Component';
import data from '../data';

function TypeAhead(props) {
  // create react state
  const [value, setValue] = React.useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);

  // max amount of suggestions
  const maxValue = 5;
  // suggestions array depending on input value
  let suggestions = props.data.filter(book => book.title.toLowerCase().includes(value.toLowerCase())).splice(0, maxValue);
  // index variable for keyboard navigation
  let nextSuggestionIndex = selectedSuggestionIndex;

  return <InputContainer>
    <ComponentContainer>
      {/* Input component */}
      <StyledInput 
        type="text"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          console.log('suggestions', suggestions)
          // if enter key press alert book title
          if (ev.key === 'Enter') {
            alert(suggestions[nextSuggestionIndex].title)
          // if arrow up move selection up
          } else if (ev.key === 'ArrowUp') {
            nextSuggestionIndex = selectedSuggestionIndex - 1;
            // make selection loop
            if (nextSuggestionIndex === -1) {
              nextSuggestionIndex = suggestions.length - 1;
            }
            // updates the state of said state?
            setSelectedSuggestionIndex(nextSuggestionIndex);
            return;
          // if arrow down move selection down
          } else if (ev.key === 'ArrowDown') {
            nextSuggestionIndex = selectedSuggestionIndex + 1;
            // make selection loop
            if (nextSuggestionIndex === suggestions.length) {
              nextSuggestionIndex = 0;
            }
            // updates the state of said state?
            setSelectedSuggestionIndex(nextSuggestionIndex);
            return;
          }
        }}
      ></StyledInput>
      {/* Suggestions under input, named Component because brain fart and lazy to rename */}
      <Component 
        data={data.books} 
        value={value} 
        categories={data.categories} 
        suggestions={suggestions} 
        index={nextSuggestionIndex}
      ></Component>
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