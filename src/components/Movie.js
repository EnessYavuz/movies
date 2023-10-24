import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import MesajBox from "./MesajBox";
import Header from "./Header";

function Movie() {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comments, setComments] = useState([]);

  const handleMessage = async (name, email, description) => {
    const response = await axios.post("http://localhost:3004/Comment", {
      name,
      email,
      description,
    });

    const comeData = [...comments, response.data];
    setComments(comeData);
  };

  const mjVerileri = async () => {
    const response = await axios.get("http://localhost:3004/Comment");
    setComments(response.data);
  };

  useEffect(() => {
    mjVerileri();
  }, []);

  useEffect(() => {
    // Filmleri API'den çekmek için bir etkileşim gerçekleştirin
    axios
      .get("http://localhost:3004/Movies")
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
    <div className="App">
      <Header/>
      <h2>Seçilen Film Resmi:</h2>
      {selectedMovie ? (
        <>
          <div className="Container">
            <div className="space">Boşluk</div>
            <div className="SeachContainer">
              <div className="themeRow">
                <h1>{selectedMovie.title}</h1>
                <img
                  src={selectedMovie.image}
                  alt="Film Resmi"
                  className="SearchImg"
                />
              </div>

              <div className="MesajContainer">
                <div className="MainMj">
                  <div className="MjTitle">
                    <h1> Yorum Atın Amk</h1>
                  </div>
                  <div className="mjRow">
                    <MesajBox
                      onCreateMessage={handleMessage}
                      comments={comments}
                    />
                  </div>
                </div>
              </div>

              <div className="footerRow">
                <Footer />
              </div>
            </div>

            <div className="space">Boşluk</div>
          </div>
        </>
      ) : (
        <p>Film bulunamadı.</p>
      )}
    </div>
  );
}

export default Movie;
