import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Movie() {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Filmleri API'den çekmek için bir etkileşim gerçekleştirin
    axios.get('http://localhost:3004/Movies')
      .then((response) => {
        const movies = response.data;
        // id'ye sahip filmi bulma:
        const movie = movies.find((movie) => movie.id === parseInt(id));
        setSelectedMovie(movie);
      })
      .catch((error) => {
        console.error("Film bilgileri alınamadı: ", error);
      });
  }, [id]);

  return (
    <div>
      <h2>Seçilen Film Resmi:</h2>
      {selectedMovie ? (
      <>
        <h1>{selectedMovie.title}</h1>
        <img src={selectedMovie.image} alt="Film Resmi" />
        </>
      ) : (
        <p>Film bulunamadı.</p>
      )}
    </div>
  );
}

export default Movie;
