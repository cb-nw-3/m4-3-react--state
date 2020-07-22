import React from "react";
import styled from "styled-components";

import Suggestion from "./Suggestion";
import BookListing from "./BookListing";

function Typeahead({ suggestions }) {
  //console.log("Typeahead");
  /// console.log(suggestions);

  const [booklist, setBooks] = React.useState("Books:");

  const [textfieldValue, setTextField] = React.useState("");
  let suggestion_array = [];

  let testdave = true;

  function findBook(event) {
    let bookSearchText = event.target.value.toLowerCase();
    let books_suggested = suggestions.books.filter((e) =>
      e.title.toLowerCase().includes(bookSearchText)
    );

    let booklist = "";
    books_suggested.forEach((element) => {
      booklist = booklist + element.title + "\n";
    });
    setTextField(event.target.value);

    books_suggested.forEach((bookFromList) => {
      suggestion_array.push(
        <Suggestion Book={bookFromList} SearchTerm={event.target.value} />
      );
    });
    console.log(booklist.length);

    setBooks(suggestion_array);
  }

  function clear(event) {
    setTextField("");
    setBooks([]);
  }

  return (
    <div>
      <TypeAheadDiv>
        <TypeHeadInput
          type="text"
          value={textfieldValue}
          onChange={findBook}
        ></TypeHeadInput>
        <Button onClick={clear}>Clear</Button>
      </TypeAheadDiv>
      {booklist.length !== 0 ? (
        <SuggestionDiv>{booklist}</SuggestionDiv>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Typeahead;

const TypeAheadDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin: 10px;
`;

const SuggestionDiv = styled.div`
  margin-left: 25px;
  margin-top: 25px;

  box-shadow: 3px 3px 5px 3px #ccc;
  border-radius: 5px;
  width: 500px;
`;

const TypeHeadInput = styled.input`
  width: 150px;
  height: 30px;
`;

const Button = styled.button`
  font-size: 15px;
  border-radius: 8px;
  border: 0px;
  background-color: blue;
  width: 80px;
  height: 30px;
  color: whitesmoke;
  outline: 0;
  margin-right: 5px;
`;
