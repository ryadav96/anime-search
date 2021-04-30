import React, { useState } from "react";
import Button from "./Button";

function SearchField({ onSearch }) {
  const [inputText, setInputText] = useState("");
  const handleChanges = (event) => {
    setInputText(event.target.value);
  };
  return (
    <form>
      <div className="search">
        <input
          required
          type="text"
          value={inputText}
          onChange={(event) => handleChanges(event)}
        />
        <Button
          handleClick={() => {
            onSearch(inputText);
          }}
          text="Go"
        />
      </div>
    </form>
  );
}

export default SearchField;
