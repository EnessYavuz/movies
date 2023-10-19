// CartList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function CartList({ movies }) {
  return (
    <div className="CartMain">
      <div className="Container">
        <div className="filters">Filtreler</div>
        <div className="movie">
          {movies.map((movie) => (
            <div key={movie.id} className="CartSize">
              <Link to={`/${movie.title}/${movie.id}`}>
                <Cart movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartList;
