import React from "react";
import Suggestion from "./Suggestion";

function SuggestionList(props) {
  const { refinedSuggestions } = props;
  console.log("SuggestionList: ", refinedSuggestions);

  return refinedSuggestions.map((book) => {
    return <Suggestion book={book} />;
  });
}

export default SuggestionList;
