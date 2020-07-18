import React from 'react';
import styled from 'styled-components';


const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = React.useState('');

    let matchedSuggestions = suggestions
        .filter((suggestion) => {
            const minimumCharacters = value.length > 1;
            const containValue = suggestion.title
                .toLowerCase()
                .includes(value.toLowerCase());

            return minimumCharacters && containValue;
        })

    return (
        <div>
            <Search>
                <Input
                    type='text'
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            handleSelect(ev.target.value);
                        }
                    }}
                />
                <Button onClick={() => setValue('')}>Clear</Button>
            </Search>
            {matchedSuggestions.length > 0 && (<SuggestionList>
                {console.log("getting here")}
                {matchedSuggestions.map((suggestion) => {
                    return (
                        <Suggestion
                            key={suggestion.id}
                            onClick={() => handleSelect(suggestion.title)}
                        >
                            {suggestion.title}
                        </Suggestion>
                    );
                })}
            </SuggestionList>)}
        </div>
    )
}

const Search = styled.section`
    display: flex;
`

const Input = styled.input`
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    padding: 0 5px;
`

const Button = styled.button`
    background: red;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    text-align: center;
    margin-left: 10px;
    transition: 0.5s;

    &:hover{
        background: #DC143C;
    }
`
const SuggestionList = styled.ul`
    list-style-type: none;
    margin-top: 5px;
    border-bottom-right-radius: 30px;
    border: 2px solid black;
`

const Suggestion = styled.li`
    padding: 10px;
    border-bottom: 1px solid black;

    &:last-of-type{
        border-bottom-right-radius: 30px;
        border-bottom: none
    }

    &:hover{
        background: beige;
        cursor: pointer;
    }
`

export default Typeahead;