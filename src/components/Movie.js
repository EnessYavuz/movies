import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import MesajBox from "./MesajBox";
import Header from "./Header";


function Movie() {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(true);

  // Filmi seçildiğinde ve sayfa yüklendiğinde verileri çekme işlemini gerçekleştiren fonksiyon
  const fetchData = useCallback(async () => {
    try {
      // Film verisini çek
      const movieResponse = await axios.get(
        `http://localhost:3004/Movies/${id}`
      );
      setSelectedMovie(movieResponse.data);

      // Yorumları çek
      const commentsResponse = await axios.get(
        `http://localhost:3004/Comments?movieId=${id}`
      );
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Film ve/veya yorumlar alınamadı: ", error);
    }
  }, [id]);

  useEffect(() => {
    // Verileri daha önce çekmediyse fetchData işlemini gerçekleştir

    if (isDataFetched) {
      fetchData();
      setIsDataFetched(!isDataFetched);
    }
  }, [isDataFetched, fetchData]);

  // Yeni yorumu gönderme işlemi
  const handleMessage = async (name, email, description) => {
    if (selectedMovie) {
      try {
        await axios.post("http://localhost:3004/Comments", {
          movieId: selectedMovie.id,
          name,
          email,
          description,
        });
        // Yeni yorumu ekledikten sonra verileri tekrar çekme işlemine gerek yok,
        // zaten veriler sayfa yüklendiğinde veya film seçildiğinde çekiliyor
      } catch (error) {
        console.error("Yorum gönderilemedi: ", error);
      }
    }
  };

  return (
    <div className="App">
      <Header />
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
            </div>
            <div className="space">Boşluk</div>
          </div>
          <div className="Container">
            <div className="space"></div>
            <Footer />
            <div className="space"> </div>
          </div>
          
        </>
      ) : (
        <p>Film bulunamadı.</p>
      )}
    </div>
  );
}

export default Movie;
