import React from 'react';
import data from '../data';
import Typeahead from './Typeahead';

import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

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
  margin: 20px;
`

export default App;
