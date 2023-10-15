function Cart({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>IMDB: {movie.IMDB}</p>
    </div>
  );
}

export default Cart;