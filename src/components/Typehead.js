import React from 'react';
import styled from 'styled-components';

function Typehead ({suggestions, handleSelect}) {
    const [value, setValue] = React.useState('');

    function guessBooks (input){
        if (input.length > 1) {
            return suggestions.filter(book => book.id.toLowerCase().includes(input.toLowerCase()));
        } else {
            return [];
        }
    };
    const bookSuggestions = guessBooks(value);

    function List(){
        if(bookSuggestions.length < 1){
            return (
                <div></div>
                )
        } else {
            return(
                <SuggestionList>
            {
            bookSuggestions.map((book) => {
                return(
                    <Suggestion>{book.id}</Suggestion>
                ); 
            })}
        </SuggestionList>
            )

        }
    }

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
            <Break />
            {List()}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 100px auto 0 auto;
    height: 40px;
    width: 750px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const SearchInput = styled.input`
    border:solid 2px rgb(66, 135, 245);
    border-radius: 3px;
    height: 100%;
    flex-basis:80%;
    margin-right: 10px;
    font-size: 18px;
`;

const ClearButton = styled.button`
    border: none;
    border-radius: 3px;
    background-color: blue;
    color: white;
    height: 100%;
    flex-basis: 15%;
    font-size: 18px;
`;

const SuggestionList =  styled.ul`
    margin-right:28px;
    flex-basis:100%;
    font-size: 18px;
    padding: 10px;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
`

const Suggestion = styled.li`
    flex-basis:100%;
    padding: 8px;
`

const Break = styled.div`
    flex-basis: 100%;
    height:0px;
`

export default Typehead;