import React from 'react';
import styled from 'styled-components';

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

export default Button;