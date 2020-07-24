import React from 'react';
import styled from 'styled-components';





const Typeahead = ({suggestions, categories, handleSelect}) => {
    const [value, setValue] = React.useState('');
    let matchedSuggestions = suggestions.filter(suggestion => suggestion.title.toLowerCase().includes(value.toLowerCase()));
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);

    return (
    <>
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
    <Suggestion>
       
        {value.length >= 2 && matchedSuggestions.map((suggestion, index) => {
          const isSelected = selectedSuggestionIndex === index;
          return (
            <SuggestionList
              key={suggestion.id}
              style={{background: isSelected ? '#FFFF99' : 'transparent',
            }}
              onClick={() => handleSelect(suggestion.title)}
              onMouseEnter={() => {setSelectedSuggestionIndex(index);
              }}
              >
               
                <span>
                {suggestion.title.slice(0 ,suggestion.title.toLowerCase().indexOf(value)+ value.length)}
                  <Prediction>
                  {suggestion.title.slice(suggestion.title.toLowerCase().indexOf(value) + value.length)}
                  </Prediction>
                </span> 
                &nbsp;in <BookCategory>{suggestion.categoryId}</BookCategory>
            </SuggestionList>
          );
        })}
    </Suggestion>
    </>
    );
};

const Wrapper = styled.div`
    display: flex;
`;

const Input = styled.input`
    width: 350px;
    padding: 5px;
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

const Suggestion = styled.li`
  display: inline;
  list-style-type: none;
  border: solid 1px lightgrey;
  margin-top: 5px;
  
  
`

const SuggestionList = styled.li`
  padding: 10px;
  width: 400px;
`

const Prediction = styled.span`
  font-weight: bold;
`;

const BookCategory = styled.span`
  color: purple;
  font-style: italic;
`

export default Typeahead;