import React from "react";

function InputMovie({ handleInput }) {
  return (
    <div>
      <input
        onChange={handleInput}
        placeholder="film ismini gir"
      />
    </div>
  );
}

export default InputMovie;