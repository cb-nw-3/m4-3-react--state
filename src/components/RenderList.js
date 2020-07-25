import React from "react";
import BookList from "./BookList";

function RenderList(props) {
  const {
    returnedSuggestions,
    refinedSuggestions,
    handleSelect,
    value,
    selectedSuggestionIndex,
  } = props;
  if (returnedSuggestions) {
    return (
      <BookList
        refinedSuggestions={refinedSuggestions}
        handleSelect={handleSelect}
        value={value}
        selectedSuggestionIndex={selectedSuggestionIndex}
      />
    );
  } else {
    return null;
  }
}

export default RenderList;
