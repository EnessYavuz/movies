import React from "react";
import Cart from "./Cart";

function CartList({ movies }) {
  return (
    
    <div className="CartMain">
       <div className="Container">
      <div className="filters">Filtreler</div>
      <div className="movie">
      {movies.map((movie) => (
        <div key={movie.id} className="CartSize">
          <Cart movie={movie} />
        </div>
      ))}
      </div>
      </div>
    </div>
    
  );
}

export default CartList;