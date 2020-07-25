import React from 'react';
import styled from 'styled-components';

const Typeahead= ({suggestions, handleSelect}) => {
  const [value, setValue] = React.useState('');
  let matchedSuggestions = suggestions.filter(suggestion =>suggestion.title.toLowerCase().includes(value.toLowerCase())
  );
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);
  
  return (
      <Container>
      <Wrapper>
      <BookInput
        type='text'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (matchedSuggestions) {
            switch (ev.key) {
              case 'Enter': {
                handleSelect(matchedSuggestions[selectedSuggestionIndex].title);
                return;
              }
              case 'ArrowUp': {
                ev.preventDefault();
                setSelectedSuggestionIndex(selectedSuggestionIndex -1);
                return;
              }
              case 'ArrowDown': {
                ev.preventDefault();
                setSelectedSuggestionIndex(selectedSuggestionIndex +1);
                return;
              }
            }
            return;
          } else {
              selectedSuggestionIndex = 0;
            }
        }}
      />
      <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
      <SuggestionList>
          {value.length >= 2 && matchedSuggestions.map((suggestion, index) => {
              const isSelected = selectedSuggestionIndex === index;
              return (
                <Suggestion 
                  key={suggestion.id}
                  style={{
                      background: isSelected ? 'blue' : 'transparent',
                  }}
                  onClick={() => handleSelect(suggestion.title)}
                  onMouseEnter={() => {setSelectedSuggestionIndex(index)}}
                >
                  <span>
                    {suggestion.title.slice(0 ,suggestion.title.toLowerCase().indexOf(value)+ value.length)}
                    <Prediction>{suggestion.title.slice(suggestion.title.toLowerCase().indexOf(value) + value.length)}</Prediction>
                  </span>
                   &nbsp;in <BookCategory>{suggestion.categoryId}</BookCategory>
                </Suggestion>
              );
          })}
      </SuggestionList>
      </Wrapper>
      </Container>
  )
}
const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  margin-top: 100px;
  position: absolute;
  left: 200px;
`;
const BookInput = styled.input`
  padding: 10px 100px 10px 10px;
  text-align: left;
`;
const ClearButton = styled.button`
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  border: 1px solid darkblue;
  border-radius: 10px;
  margin-left: 10px;
`;
const SuggestionList = styled.ul`
  display:block;
  text-decoration: none;
  & :last-child {
      padding-top: 3px;
      padding-bottom: 0px;
      border-bottom: none;
  }
`;
const Suggestion = styled.li`
  text-decoration: none;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid grey;
  width: 355px;
  &:hover{
      background-color: #f7e890;
  }
`;
const BookCategory = styled.span`
  color:purple;
  font-style: italic;
`;
const Prediction = styled.span`
  font-weight: bold;
`
export default Typeahead;