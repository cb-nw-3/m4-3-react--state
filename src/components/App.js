import React from 'react';

import data from '../data';

import GlobalStyles from './GlobalStyles';

import Typeahead from './Typeahead';

// console.log(data);

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Typeahead
        suggestions ={data.books}
        handleSelect={(suggestion)=> {
          window.alert(suggestion)
        }}
      />
    </>
  );
};

export default App;
