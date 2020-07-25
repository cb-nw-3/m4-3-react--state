import React from "react";
import styled from "styled-components";

import Suggestion from "./Suggestion";
import BookListing from "./BookListing";

let suggestion_array = [];
let selectedSuggestionIndex = 0;
let book_rendered_count = 0;
function Typeahead({ suggestions }) {
  //console.log("Typeahead");
  /// console.log(suggestions);

  const [booklist, setBooks] = React.useState("Books:");

  const [textfieldValue, setTextField] = React.useState("");

  function findBook(event) {
    suggestion_array = [];
    console.log(event.target.value);

    let bookSearchText = event.target.value.toLowerCase();
    let books_suggested = suggestions.books.filter((e) =>
      e.title.toLowerCase().includes(bookSearchText)
    );

    let booklist = "";
    books_suggested.forEach((element) => {
      booklist = booklist + element.title + "\n";
    });
    setTextField(event.target.value);

    book_rendered_count = books_suggested.length;
    books_suggested.forEach((bookFromList, i) => {
      // console.log("books i");

      let category_name = Object.values(suggestions.categories).find(
        (element) => element.id === bookFromList.categoryId
      ).name;

      // console.log(i);
      // console.log(selectedSuggestionIndex);

      if (i === selectedSuggestionIndex) {
        suggestion_array.push(
          <Suggestion
            Book={bookFromList}
            SearchTerm={event.target.value}
            isSelected={true}
            categoryName={category_name}
          />
        );
      } else {
        suggestion_array.push(
          <Suggestion
            Book={bookFromList}
            SearchTerm={event.target.value}
            isSelected={false}
            categoryName={category_name}
          />
        );
      }
    });
    // console.log(booklist.length);
    if (selectedSuggestionIndex > suggestion_array.length - 1) {
      selectedSuggestionIndex = suggestion_array.length - 1;
    }

    setBooks(suggestion_array);
  }

  function handleKeyPress(event) {
    switch (event.key) {
      case "Enter": {
        // handleSelect(ev.target.value);
        return;
      }
      case "ArrowUp": {
        selectedSuggestionIndex = selectedSuggestionIndex - 1;
        if (selectedSuggestionIndex < 0) {
          selectedSuggestionIndex = 0;
        }
        console.log("Arrow up");
        console.log(selectedSuggestionIndex);
        // TODO: Handle moving the selection up
        findBook(event);
        return;
      }
      case "ArrowDown": {
        console.log("Arrow down");

        selectedSuggestionIndex = selectedSuggestionIndex + 1;
        if (selectedSuggestionIndex > book_rendered_count - 1) {
          selectedSuggestionIndex = book_rendered_count - 1;
        }
        console.log(selectedSuggestionIndex);
        findBook(event);
        return;
        // TODO: Handle moving the selection down
      }
    }
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
          onKeyDown={handleKeyPress}
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
