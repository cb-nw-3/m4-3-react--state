import React from 'react';
import styled from 'styled-components';

import data from '../data';

import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export default App;
