import React from 'react';

import styled from 'styled-components'

function Suggestion(props) {
  console.log('Suggestion', props)
  let firstPart;
  let secondPart;
  let inputIndex;
  return <ul>
    {props.data.map(book => {
      if (book.title.toLowerCase().includes(props.value) && props.value.length > 1) {
        inputIndex = book.title.toLowerCase().indexOf(props.value);
        firstPart = book.title.slice(0, inputIndex);
        secondPart = book.title.slice(inputIndex + props.value.length);
        return <StyledLink href="">
          <StyledListItem>
            <FirstPart>{firstPart}</FirstPart>
            <InputPart>{props.value}</InputPart>
            <SecondPart>{secondPart}</SecondPart> 
            <StyledCategory>in {props.categories[book.categoryId].name}</StyledCategory>
          </StyledListItem>
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
const FirstPart = styled.span`
  font-weight: bold;
`
const SecondPart = styled.span`
  font-weight: bold;
`
const InputPart = styled.span`
  font-weight: normal;
`
const StyledCategory = styled.p`
  margin-top: 5px;
  font-weight: lighter;
  color: purple;
`

export default Suggestion;