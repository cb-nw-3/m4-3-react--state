import React from "react";
import Book from "./Book";

function BookList(props) {
  const {
    refinedSuggestions,
    handleSelect,
    value,
    selectedSuggestionIndex,
  } = props;
  return refinedSuggestions.map((element) => {
    return (
      <Book
        listItemID={refinedSuggestions.indexOf(element)}
        handleSelect={handleSelect}
        book={element}
        value={value}
        selectedSuggestionIndex={selectedSuggestionIndex}
      />
    );
  });
}

export default BookList;
