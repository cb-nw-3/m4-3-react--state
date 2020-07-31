import React from "react";

import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";
import data from "../data.js";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Typeahead suggestions={data}></Typeahead>
      {/* TODO */}
    </>
  );
};

export default App;
