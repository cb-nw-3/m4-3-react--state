import React from "react";
import styled from "styled-components"; // Added as part of exercise 1

import data from "../data"; // Added as part of exercise 1
import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead"; // Added as  part of Exercise 1

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* Added as part of Exercise 1 from "hint-1.md*/}
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
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`;

export default App;
