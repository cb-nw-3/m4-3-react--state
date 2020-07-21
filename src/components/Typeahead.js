import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
`

const InputField = styled.input`
    margin: 10px;
    height: 40px;
    width: 300px;
`

const InputButton = styled.button`
    background: #2102ad;
    color: white;
    border: 0;
    border-radius: 3px;
    height: 40px;
    padding: 0 10px 0 10px;
    font-size: 20px;
`

function Typeahead() {
    return (
        <Wrapper>
            <InputField type="text" onKeyDown={(ev) => { console.log(ev.key) }} />
            <InputButton>Clear</InputButton>
        </Wrapper>
    )
};

export default Typeahead;