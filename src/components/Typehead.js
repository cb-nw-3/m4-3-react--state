import React from 'react';
import styled from 'styled-components';

function Typehead ({suggestions, handleSelect}) {
    const [value, setValue] = React.useState('');

    return (
        <Wrapper>
            <SearchInput
                type='text'
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {
                    if(event.key === 'Enter'){
                        handleSelect(event.target.value);
                    }
                }}
            />
            <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 100px auto 0 auto;
    height: 40px;
    display: flex;
    justify-content: center;
`;

const SearchInput = styled.input`
    border:solid 2px rgb(66, 135, 245);
    border-radius: 3px;
    height: 100%;
    width: 375px;
    margin-right: 10px;
    font-size: 18px;
`;

const ClearButton = styled.button`
    border: none;
    border-radius: 3px;
    background-color: blue;
    color: white;
    height: 100%;
    width: 75px;
    font-size: 18px;
`;

export default Typehead;