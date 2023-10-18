import "../App.css"

function Cart({ movie }) {
  return (
   
    <div className="Cart">
      <div className="imageContainer">
      {/* <img src={movie.image} alt="resim" /> */}
      </div>
      <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>IMDB: {movie.IMDB}</p>
      </div>

    </div>
    

  );
}

export default Cart;