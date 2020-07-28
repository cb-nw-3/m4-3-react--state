import React from 'react';
import styled from 'styled-components';

const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = React.useState('');

    return (
        <>
            <DIV>
                <Input
                    type="text"
                    placeholder="SEARCH"
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            handleSelect(ev.target.value);
                        }
                    }}
                />

                <Button onClick={() => setValue('')}>Clear</Button>
            </DIV>
        </>
    );
};

const DIV = styled.div`
    height: 40px;
`;

const Input = styled.input`
    height: 100%;
    border: solid 1px;
    border-radius: 4px;
    border-color: #b4b4b4;
    margin-right: 10px;
    width: 350px;
    font-size: 1em;
    padding-left: 10px;
`;

const Button = styled.button`
    height: 100%;
    width: 90px;
    background-color: blue;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1em;
`;

export default Typeahead;
