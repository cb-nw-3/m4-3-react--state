import React from "react";
import styled from "styled-components";
import BookList from "./BookList";

function RenderList(props) {
  const { returnedSuggestions, refinedSuggestions, handleSelect } = props;
  if (returnedSuggestions) {
    return (
      <BookList
        refinedSuggestions={refinedSuggestions}
        handleSelect={handleSelect}
      />
    );
  } else {
    return null;
  }
}

export default RenderList;
