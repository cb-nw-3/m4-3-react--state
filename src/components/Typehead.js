import React from 'react';
import styled from 'styled-components';

function Typehead ({suggestions, handleSelect}) {
    const [value, setValue] = React.useState('');
    const [selectedIndex, setSelectedSuggestion] = React.useState(0);
    const [visible, setVisible] = React.useState('true');

    function guessBooks (input){
        if (input.length > 1) {
            return suggestions.filter(book => book.title.toLowerCase().includes(input.toLowerCase()));
        } else {
            return [];
        }
    };
    const bookSuggestions = guessBooks(value);
    const selectedSuggestion = bookSuggestions[selectedIndex];
    console.log(selectedSuggestion);

    function List(){
        if(bookSuggestions.length < 1){
            return (
                <div></div>
                )
        } else {
            if (visible){
                return(
                    <SuggestionList>
                {
                bookSuggestions.map((book) => {
                    const title = book.title;
                    const indexOfWord = title.toLowerCase().search(value.toLowerCase());
                    // Make this DRY
                    {if(book === selectedSuggestion){
                        return(
                            <SelectedSuggestion 
                            onMouseEnter={() => {
                                setSelectedSuggestion(bookSuggestions.indexOf(book));
                            }}
                            key={book.id}
                            onClick={() => {
                                setValue(title);
                                handleSelect(title);
                            }}
                            >
                            <Prediction>{title.slice(0,indexOfWord)}</Prediction>{value}<Prediction>{title.slice(indexOfWord + value.length)}</Prediction>
                            <i> in </i><Category>{book.categoryId}</Category>
                            </SelectedSuggestion>);
                    } else {
                        return(
                            <Suggestion 
                            key={book.id}
                            onMouseEnter={() => {
                                setSelectedSuggestion(bookSuggestions.indexOf(book));
                            }}
                            onClick={() => {
                                setValue(title);
                                handleSelect(title);
                            }}
                            >
                            <Prediction>{title.slice(0,indexOfWord)}</Prediction>{value}<Prediction>{title.slice(indexOfWord + value.length)}</Prediction>
                            <i> in </i><Category>{book.categoryId}</Category>
                            </Suggestion>
                        ); 
                        }}
                    })}
                    </SuggestionList>
                )
            } else {
                return (
                    <div></div>
                    )
            }
        }
    }

    return (
        <Wrapper>
            <SearchInput
                type='text'
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {
                    switch (event.key) {
                        case 'Enter': {
                            handleSelect(event.target.value);
                            return;
                        }
                        case 'ArrowDown': {
                            if(selectedIndex < bookSuggestions.length - 1){
                                setSelectedSuggestion(selectedIndex + 1);
                                return;
                            } else {
                                setSelectedSuggestion(bookSuggestions.length - 1)
                                return;
                            }
                        }
                        case 'ArrowUp': {
                            if(selectedIndex === 0) {
                                setSelectedSuggestion(0);
                                return;
                            } else {
                                setSelectedSuggestion(selectedIndex - 1);
                                return;
                            }
                        }
                        case 'Escape': {
                            setVisible(false);
                            return;
                        }
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
    }
`
const SelectedSuggestion = styled.li`
        flex-basis:100%;
        padding: 8px;
        background-color: lightskyblue;

`


const Category = styled.span`
    font-size: 15px;
    color: fuchsia;
`

const Break = styled.div`
    flex-basis: 100%;
    height:0px;
`

const Prediction = styled.span`
    font-weight: bold;
`

export default Typehead;