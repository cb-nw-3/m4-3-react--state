import React from "react";
import Book from "./Book";

function BookList(props) {
  const { refinedSuggestions, handleSelect, value } = props;
  return refinedSuggestions.map((element) => {
    return <Book handleSelect={handleSelect} book={element} value={value} />;
  });
}

export default BookList;
