import React from 'react';
import data from '../data';
import GlobalStyles from './GlobalStyles';

//importing components
import Typehead from './Typehead';



const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Typehead 
        suggestions={data.books}
        handleSelect={(suggestion) => {
          window.alert(`You selected: ${suggestion}`)
        }}
      />
    </>
  );
};

export default App;
