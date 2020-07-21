import React, { useState } from 'react';
import styled from 'styled-components';
import MatchFormatter from './MatchFormatter';

let showUl = false;
const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState('');
  let matchedSuggestions = [{ title: '' }];
  if (value === '' || value.length < 2) {
    showUl = false;
  } else {
    matchedSuggestions = suggestions.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    showUl = true;
  }
  console.log(showUl);

  return (
    <>
      <Wrapper>
        <Input
          name='search'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSelect(matchedSuggestions[0].title);
            }
          }}
        ></Input>
        <ClearBtn
          onClick={() => {
            setValue('');
          }}
        >
          Clear
        </ClearBtn>
      </Wrapper>
      {showUl && (
        <Ul>
          {matchedSuggestions.map((element, index) => (
            <Suggestion
              key={index}
              onClick={(e) => {
                handleSelect(matchedSuggestions[index].title);
              }}
            >
              <MatchFormatter book={element} string={value} />
            </Suggestion>
          ))}
        </Ul>
      )}
    </>
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

const Ul = styled.ul`
  margin-left: 5px;
  padding: 0 10px;
  &:hover li:first-child {
    background-color: white;
  }
`;

const Suggestion = styled.li`
  &:hover {
    background-color: yellow !important;
  }
  &:first-child {
    background-color: yellow;
  }
`;

export default Typeahead;
