import React from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";

const Typeahead = ({ suggestions, categories }) => {
  // let foundBooksArray = [];
  const [value, setValue] = React.useState("");
  const [itemVisibility, setItemVisibility] = React.useState(false);
  const result = suggestions.filter((word) => {
    return word.title.toLowerCase().includes(value.toLowerCase());
  });

  // used for the keyboard up and down
  const [indexOfSelectedBook, setindexOfSelectedBook] = React.useState(0);

  return (
    <>
      <UserInput
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onFocus={() => {
          setItemVisibility(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (result) {
              // result.forEach((element) => {
              //   alert(element.title);
              // });

              alert(result[indexOfSelectedBook].title);
              setItemVisibility(true);
            } else {
              alert("Not existing book title.");
            }

            return;
          }
          if (event.key === "ArrowUp") {
            if (indexOfSelectedBook > 0) {
              setindexOfSelectedBook(indexOfSelectedBook - 1);
            }
          }
          if (event.key === "ArrowDown") {
            if (result.length > indexOfSelectedBook) {
              setindexOfSelectedBook(indexOfSelectedBook + 1);
            }
          }
        }}
      ></UserInput>
      <ClearButton
        type="button"
        onClick={() => {
          setValue("");
        }}
      >
        Clear
      </ClearButton>
      {/* condition to display ul */}
      {itemVisibility && (
        <DisplayUlBooks>
          {result.map((theBook) => (
            <DisplayLiBook>
              <Suggestion
                theBook={theBook}
                currValue={value}
                categories={categories}
                onClick={() => {
                  // if (event.type == "mousedown") {
                  //   alert("allo");
                  // }
                  alert("allo");
                }}
              ></Suggestion>
              {/* {currValue + suggestValue} */}
              {/* {theBook.title} */}
            </DisplayLiBook>
          ))}
        </DisplayUlBooks>
      )}
    </>
  );
};

const DisplayLiBook = styled.li`
  margin: 25px;
`;

const DisplayUlBooks = styled.ul`
  width: 40%;
  list-style: none;
  background-color: lightskyblue;
`;

const UserInput = styled.input`
  background-color: black;
  color: white;
  width: 25%;
  height: 5%;
`;

const ClearButton = styled.button`
  background-color: purple;
  border: none;
  color: white;
  margin-left: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 10%;
  height: 5%;
`;

export default Typeahead;
