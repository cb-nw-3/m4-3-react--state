import React from 'react';
import styled from 'styled-components';

import Suggestion from './Suggestion';

const Typeahead = ({ suggestions, handleSelect }) => {
    // array destructuring
    const [value, setValue] = React.useState('');
    const matchedSuggestions = suggestions.filter((suggestion) =>
        suggestion.title.toLowerCase().includes(value.toLowerCase())
    );

    return (
        <>
            <DIV>
                <Input
                    type="text"
                    placeholder="SEARCH"
                    value={value}
                    onChange={(ev) => {
                        console.log(ev.target.value);
                        setValue(ev.target.value);
                    }}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            handleSelect(ev.target.value);
                        }
                    }}
                />
                <Button onClick={() => setValue('', console.log(value))}>
                    Clear
                </Button>
                <Suggestions>
                    {value.length >= 2 &&
                        matchedSuggestions.map((suggestion) => {
                            return (
                                <Suggestion
                                    key={suggestion.id}
                                    onClick={() =>
                                        handleSelect(suggestion.title)
                                    }
                                >
                                    {suggestion.title}
                                </Suggestion>
                            );
                        })}
                </Suggestions>
            </DIV>
        </>
    );
};

const DIV = styled.div`
    height: 40px;
    width: 450px;
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
    float: left;
`;

const Button = styled.button`
    height: 100%;
    width: 90px;
    background-color: blue;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1em;
    cursor: pointer;
`;

const Suggestions = styled.ul`
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 3px 4px 11px 3px rgba(201, 197, 201, 1);
    max-height: 300px;
    overflow: scroll;
`;

export default Typeahead;
