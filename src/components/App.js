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
          handleSelect={(suggestion) => {
          window.alert(suggestion)
          }}
        />
        </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: auto;
`;

export default App;
