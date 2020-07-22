import React from 'react';
import data from '../data';
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

const { books } = data;

const App = (props) => {
  // console.log(books);
  return (
    <>
      <GlobalStyles />
      <Typeahead
        suggestions={books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      ></Typeahead>
    </>
  );
};

export default App;
