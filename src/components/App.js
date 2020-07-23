import React from "react";
import styled, { css } from "styled-components";
import data from "../data";
import Typeahead from "./Typeahead";

import GlobalStyles from "./GlobalStyles";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 100px;
  max-width: 800px;
  margin: auto;
`;

export default App;
