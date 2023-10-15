import React from "react";
import Cart from "./Cart";

function CartList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Cart movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default CartList;