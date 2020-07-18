import React from 'react';

import GlobalStyles from './GlobalStyles';
import data from '../data';
import Typeahead from './Typeahead';
import styled from 'styled-components';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead 
          suggestions={data.books}
          handleSelect={(suggestion) => {
          window.alert(suggestion)
          }}
        />
      </Wrapper>
      
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export default App;
