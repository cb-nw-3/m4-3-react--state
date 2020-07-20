import React from 'react';
import styled from 'styled-components';

const Typeahead = ({ suggestions, handleSelect }) => {

  //this state sets the current value of the user input
  const [value, setValue] = React.useState('');

  //this is to make sure that the suggestions list only renders
  //when the isVisible variable is set to true, triggered when there
  //is an existing match from input and user is on the input element
  const [isVisible, setIsVisible] = React.useState(false);

  //this will filter out the { suggestions } props to ones that match
  //user input, to validate through case-sensitivity, we compare the user
  //input and the suggestions by coercing them into being both lowercase.
  const matchedSuggestions = suggestions.filter(suggestion => (     
      suggestion.title.toLowerCase().includes(value.toLowerCase())
      //only downside to this is that even a blank char matches
      //so must add that factor into the below showSuggestions boolean
    )  
  );


  //if there are any matching suggestions, return a true boolean
  //the user input must be greater than 2 characters and the user must be
  //on the input element
  const showSuggestions = matchedSuggestions.length > 0 && isVisible && value.length > 2;


  return(
    <Wrapper>
      <InputContainer>
        <Input 
            type="text" 
            value={value}
            onChange = {(event => setValue(event.target.value))}
            //onKeyDown = {(event => console.log(event.key))}
            onFocus = {() => {setIsVisible(true);}}
          />
          <Clear onClick = {() => setValue('')}>
            Clear
          </Clear>
      </InputContainer>

      {/* conditional formatting here will only render the suggestions list
      if the validations goes through, otherwise the padding artifact
      will be displayed*/}
      {showSuggestions && (
        <SearchResultList>
          {matchedSuggestions.map(match => (
            <SearchResultItem>
              {match.title}
            </SearchResultItem>
          ))}
        </SearchResultList>
      )}
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  /* border: 1px solid goldenrod; */

  /* padding: 50px; */
  border-radius: 12px;
  /* box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1); */
  
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  font-size: 22px;
  outline: none;
  border: 2px solid lightgray;
  border-radius: 12px;

  &:focus {
    /* background: salmon; */
    outline: 2px solid dodgerblue;
    box-shadow: 0 0 3px dodgerblue;
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

const SearchResultList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0;
  padding: 20px;

  width: 500px;
  /* border: 1px solid goldenrod; */
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
  
  &:after {
    /* padding: 15px; */
  }

  & li {
    width: 100%;
    line-height: 1.6;
    padding: 15px;
    font-weight: 600;
  }

  & li:first-child {
    background: lightyellow;
  }
`;

const SearchResultItem = styled.li`
  
`;

export default Typeahead;