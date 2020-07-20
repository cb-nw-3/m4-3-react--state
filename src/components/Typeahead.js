import React from "react";
import styled from "styled-components";

function Typeahead({ suggestions }) {
  console.log("Typeahead");
  console.log(suggestions);

  const [booklist, setName] = React.useState("Books:");

  return (
    <div>
      <TypeAheadDiv>
        <TypeHeadInput
          type="text"
          onChange={(ev) => {
            let books_suggested = suggestions.books.filter((e) =>
              e.title.includes(ev.target.value)
            );
            let booklist = "";
            books_suggested.forEach((element) => {
              booklist = booklist + element.title + "\n";
            });
            setName(booklist);
          }}
        ></TypeHeadInput>
        <Button>Clear</Button>
      </TypeAheadDiv>
      <p> {booklist}</p>
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
