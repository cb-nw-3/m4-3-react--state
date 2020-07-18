import React from 'react';
import styled from 'styled-components';

const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = React.useState('');

    return (
        <>
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
        </>
    )
}

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

export default Typeahead;