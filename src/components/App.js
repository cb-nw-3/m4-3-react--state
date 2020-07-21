import React from "react";
import data from "../data";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Typeahead from "./Typeahead";

const { books, categories } = data;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Typeahead
        suggestions={books}
        handleSelect={(suggestion) => {}}
        categories={categories}
      />
    </Wrapper>
  );
};

export default App;
