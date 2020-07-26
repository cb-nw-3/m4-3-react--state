import React from "react";
import styled from "styled-components";
import data from "../data";
import GlobalStyles from "./GlobalStyles";
import Typehead from "./Typehead";

const App = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Typehead
        suggestions={data.books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default App;
