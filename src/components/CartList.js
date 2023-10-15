import React from "react";
import Cart from "./Cart";

function CartList({ movies }) {
  return (
    <div className="CartMain">
      {movies.map((movie) => (
        <div key={movie.id} className="CartSize">
          <Cart movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default CartList;