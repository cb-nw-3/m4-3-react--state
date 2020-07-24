import React from "react";
import data from "../data";
import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";
import styled from "styled-components";
const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          handleSelect={(suggestion) => {
            alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
`;

export default App;
