// Home.js
import React, { useEffect, useState } from "react";

import CartList from "./components/CartList";
import InputMovie from "./components/InputMovie";
import Footer from "./components/Footer";
import axios from "axios";
import Header from "./components/Header";

function Home() {
  const [search, setSearch] = useState("");

  const [movies, setMovies] = useState([]);

  const onChangeInput = (event) => {
    setSearch(event.target.value);
  };

  const gelenVeriler = async () => {
    const getResponse = await axios.get("http://localhost:3004/Movies");
    setMovies(getResponse.data);
  };

  useEffect(() => {
    gelenVeriler();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <InputMovie handleInput={onChangeInput} />
      <div className="Container">
        <div className="space"></div>
        <CartList movies={filteredMovies} />
        <div className="space"></div>
      </div>

      <div className="Container">
        <div className="space"></div>
        <Footer />
        <div className="space"> </div>
      </div>
    </div>
  );
}

export default Home;
