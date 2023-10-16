import React from "react";
import "../App.css"

function InputMovie({ handleInput }) {
  return (
    <div className="input" >
      <input
        onChange={handleInput}
        placeholder="film ismini gir" 
      />
      
    </div>
  );
}

export default InputMovie;