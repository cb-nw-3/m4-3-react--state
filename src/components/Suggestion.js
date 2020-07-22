import React, { useState } from 'react';
import styled from 'styled-components';
import MatchFormatter from './MatchFormatter';

const Suggestion = ({ title, index, value, handleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Li>
      tabIndex='0' key={index}
      style=
      {{
        background: isSelected ? 'hsla(50deg, 100%, 80%, 0.25)' : 'transparent',
      }}
      onClick=
      {(e) => {
        handleSelect(e.target.value);
      }}
      onFocus=
      {() => {
        setIsSelected(true);
      }}
      <MatchFormatter book={title} string={value} />
    </Li>
  );
};

export default Suggestion;

const Li = styled.li`
  border-radius: 6px;
  padding-left: 15px;
  margin-bottom: 5px;
  padding: 10px;
  &:hover {
    // background-color: yellow !important;
  }
  &:first-child {
    // background-color: yellow;
  }
`;
