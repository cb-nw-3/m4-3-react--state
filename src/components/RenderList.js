import React from "react";
import BookList from "./BookList";

function RenderList(props) {
  const {
    returnedSuggestions,
    refinedSuggestions,
    handleSelect,
    value,
    selectedSuggestionIndex,
    setValue,
    setSelectedSuggestionIndex,
  } = props;
  if (returnedSuggestions) {
    return (
      <BookList
        refinedSuggestions={refinedSuggestions}
        handleSelect={handleSelect}
        value={value}
        selectedSuggestionIndex={selectedSuggestionIndex}
        setValue={setValue}
        setSelectedSuggestionIndex={setSelectedSuggestionIndex}
      />
    );
  } else {
    return null;
  }
}

export default RenderList;
