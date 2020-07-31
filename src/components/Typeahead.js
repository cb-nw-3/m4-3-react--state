import React from "react";
import styled from "styled-components";

import Suggestion from "./Suggestion";

let suggestion_array = [];
let selectedSuggestionIndex = 0;
let book_rendered_count = 0;
let books_suggested;
function Typeahead({ suggestions }) {
  const [booklist, setBooks] = React.useState("");

  const [textfieldValue, setTextField] = React.useState("");

  function findBook(event) {
    suggestion_array = [];

    let bookSearchText = event.target.value.toLowerCase();

    books_suggested = suggestions.books.filter((e) =>
      e.title.toLowerCase().includes(bookSearchText)
    );

    setTextField(event.target.value);

    book_rendered_count = books_suggested.length;

    books_suggested.forEach((bookFromList, i) => {
      let category_name = Object.values(suggestions.categories).find(
        (element) => element.id === bookFromList.categoryId
      ).name;

      suggestion_array.push(
        <Suggestion
          Book={bookFromList}
          SearchTerm={event.target.value}
          isSelected={i === selectedSuggestionIndex}
          categoryName={category_name}
        />
      );
    });

    setBooks(suggestion_array);
  }

  function handleKeyPress(event) {
    // console.log(event.key);
    switch (event.key) {
      case "Enter": {
        selectBook();
        // handleSelect(ev.target.value);
        return;
      }
      case "ArrowUp": {
        selectedSuggestionIndex = selectedSuggestionIndex - 1;
        if (selectedSuggestionIndex < 0) {
          selectedSuggestionIndex = 0;
        }
        findBook(event);
        return;
      }
      case "ArrowDown": {
        selectedSuggestionIndex = selectedSuggestionIndex + 1;
        if (selectedSuggestionIndex > book_rendered_count - 1) {
          selectedSuggestionIndex = book_rendered_count - 1;
        }
        findBook(event);
        return;
        // TODO: Handle moving the selection down
      }
      case "Escape": {
        clear();
      }
    }
  }

  function clear() {
    setTextField("");
    setBooks([]);
  }

  function HightlightBG(event) {
    let title_search = event.target.textContent.toLowerCase();
    let elements = title_search.split(" in");

    if (books_suggested !== undefined) {
      // console.log(books_suggested[0]);
      let book_rolled_over = books_suggested.findIndex((e) =>
        e.title.toLowerCase().includes(elements[0])
      );
      //book_of_current_moused_over = books_suggested[book_rolled_over];
      selectedSuggestionIndex = book_rolled_over;

      suggestion_array = [];

      booklist.forEach((bookE) => {
        let selected_local = false;
        if (bookE.props.Book === books_suggested[book_rolled_over]) {
          selected_local = true;
        }
        suggestion_array.push(
          <Suggestion
            Book={bookE.props.Book}
            SearchTerm={bookE.props.SearchTerm}
            isSelected={selected_local}
            categoryName={bookE.props.categoryName}
          />
        );
      });
      setBooks(suggestion_array);

      console.log(book_rolled_over);
    }
  }

  function selectBook() {
    let bookSelected = booklist[selectedSuggestionIndex];

    if (bookSelected != undefined) {
      window.alert(
        `You selected ${bookSelected.props.Book.title} by ${bookSelected.props.Book.author}`
      );
    }
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
        <SuggestionDiv onMouseOver={HightlightBG} onMouseDown={selectBook}>
          {booklist}
        </SuggestionDiv>
      ) : (
        <div></div>
      )}
    </div>
  );
}

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
export default Typeahead;
