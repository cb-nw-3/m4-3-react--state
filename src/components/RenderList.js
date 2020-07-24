import React from "react";
import styled from "styled-components";
import BookList from "./BookList";

function RenderList(props) {
  const {
    returnedSuggestions,
    refinedSuggestions,
    handleSelect,
    value,
  } = props;
  if (returnedSuggestions) {
    return (
      <BookList
        refinedSuggestions={refinedSuggestions}
        handleSelect={handleSelect}
        value={value}
      />
    );
  } else {
    return null;
  }
}

export default RenderList;
