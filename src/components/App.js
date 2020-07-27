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
        categories={data.categories}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default App;
