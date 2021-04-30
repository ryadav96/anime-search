import React from "react";

function Button({ handleClick, text }) {
  return (
    <button
      type="submit"
      onClick={(event) => {
        event.preventDefault();
        handleClick(event);
      }}
      className="button"
    >
      {text}
    </button>
  );
}

export default Button;
