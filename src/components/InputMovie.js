import React from "react";
import "../App.css"

function InputMovie({ handleInput }) {
  return (
  <>




    <div className="ContainerInput">
    <div className="spaceInput"></div>
    <div className="CartMainInput">
    
    <p className='InputLink' >lorem</p>
    <p className='InputLink' >lorem</p>
    <p className='InputLink' >lorem</p>
    <p className='InputLink' >lorem</p>
    <p className='InputLink' >lorem</p>

    <div className='InputContainer'>
    <div className="input" >
      <input
        onChange={handleInput}
        placeholder="film ismini gir" 
        className="SearchInput"
      />
      
    </div>

    </div>
    </div>
    <div className="spaceInput"></div>
    </div>
  </>

  );
}

export default InputMovie;