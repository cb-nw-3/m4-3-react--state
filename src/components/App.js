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
          handleSelect={(suggestion) => alert('Selected: ' + suggestion)}
        />
        </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: auto;
`;

export default App;
