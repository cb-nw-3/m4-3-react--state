import React from 'react';
import data from '../data';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          categories={data.categories}
          //when I enter a word in the input field, there's an alert with the same word
          handleSelect={(suggestion) => window.alert(suggestion)}
          categories={data.categories}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`;

export default App;
