import React from 'react';

import GlobalStyles from './GlobalStyles';
import data from '../data';
import Typeahead from './Typeahead';
import styled from 'styled-components';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
        <Typeahead 
          suggestions={data.books}
          handleSelect={(suggestion) => {
          window.alert(suggestion)
          }}
          categories={data.categories}
        />
    </>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export default App;
