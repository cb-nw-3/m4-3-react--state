import React from "react";
//importing data
import data from "../data";
import Typeahead from "./Typeahead";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Typeahead suggestions={data.books} categories={data.categories} />
    </>
  );
};

export default App;
