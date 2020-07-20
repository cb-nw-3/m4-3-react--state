import React from 'react';

import styled from 'styled-components'

function Suggestion(props) {
  console.log('Suggestion Value', props.value)
  console.log('Suggestion Books', props.books)
  return <ul>
    {props.data.map(book => {
      if (book.title.toLowerCase().includes(props.value) && props.value.length > 1) {
        return <StyledLink href="">
          <StyledListItem>{book.title}</StyledListItem>
        </StyledLink>
      }
    })}
  </ul>
}

const StyledListItem = styled.li`
  width: 300px;
  text-align: left;
  margin: 5px;
  padding: 5px;

  &:hover {
    background-color: #fef6e4;
  }
`
const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  &:focus ${StyledListItem} {
    background-color: #fef6e4;
  }
`

export default Suggestion;