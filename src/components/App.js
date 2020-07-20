import React from 'react';

import GlobalStyles from './GlobalStyles';
import TypeAhead from './TypeAhead';
// https://stackoverflow.com/questions/43814830/destructuring-a-default-export-object
import data from '../data';
const { categories, books } = data; 


const App = (props) => {
  console.log('categories', categories)
  console.log('books', books)
  return (
    <>
      <GlobalStyles />
      <TypeAhead data={books} handleSelect={(bookSuggestion) => {alert(bookSuggestion)}}></TypeAhead>
    </>
  );
};

export default App;
