import React from 'react';
import styled from 'styled-components';

const Suggestion = styled.li`
    cursor: pointer;
    text-align: left;
    line-height: 20px;
    padding: 10px;
    list-style: none;
    &:hover {
        background-color: #fffacc;
    }
`;

export default Suggestion;