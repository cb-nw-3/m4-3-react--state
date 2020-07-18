import React from "react";

import styled from "styled-components";

import data from "../data";

import GlobalStyles from "./GlobalStyles";

import Typeahead from "./Typeahead";

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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
`;
export default App;
