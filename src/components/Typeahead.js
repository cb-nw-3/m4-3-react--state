import React from 'react';
import styled from 'styled-components';

import Suggestion from './Suggestion';

const Typeahead = ({ suggestions, handleSelect }) => {
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
                        setValue(ev.target.value);
                    }}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            handleSelect(ev.target.value);
                        }
                    }}
                />
                <Button onClick={() => setValue('')}>Clear</Button>
                <Suggestions>
                    {value.length >= 2 &&
                        matchedSuggestions.map((suggestion) => {
                            const matchIndex = suggestion.title
                                .toLowerCase()
                                .indexOf(value.toLowerCase());
                            const matchEnd = matchIndex + value.length;
                            const firstHalf = suggestion.title.slice(
                                0,
                                matchEnd
                            );
                            const secondHalf = suggestion.title.slice(matchEnd);

                            return (
                                <Suggestion
                                    key={suggestion.id}
                                    onClick={() =>
                                        handleSelect(suggestion.title)
                                    }
                                >
                                    <span>
                                        {firstHalf}
                                        <Prediction>{secondHalf}</Prediction>
                                        <em> in </em>
                                        <CategoryId>
                                            {suggestion.categoryId}
                                        </CategoryId>
                                    </span>
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
    outline: none;
`;

const Suggestions = styled.ul`
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 3px 4px 11px 3px rgba(201, 197, 201, 1);
    max-height: 300px;
    overflow: scroll;

    &:empty {
        display: none;
    }
`;

const Prediction = styled.span`
    font-weight: bold;
`;

const CategoryId = styled.em`
    color: purple;
`;

export default Typeahead;
