import React from 'react';
import styled from 'styled-components';

import data, { categories } from '../data';

import GlobalStyles from './GlobalStyles';

import Typeahead from './Typeahead';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const App = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Typeahead
        suggestions={data.books}
        handleSelect={(suggestion => {
          window.alert(suggestion)
        })}
        categories={categories}
      />
    </Wrapper>
  );
};

export default App;
