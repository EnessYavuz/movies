// Home.js
import React, { useEffect, useState } from 'react';

import CartList from './components/CartList';
import InputMovie from './components/InputMovie';
import MesajBox from './components/MesajBox';
import axios from 'axios';

function Home() {
  const [search, setSearch] = useState('');
  const [comments, setComments] = useState([]);
  const [movies, setMovies] = useState([]);

  const onChangeInput = (event) => {
    setSearch(event.target.value);
  };

  const gelenVeriler = async () => {
    const getResponse = await axios.get('http://localhost:3004/Movies');
    setMovies(getResponse.data);
  };

  useEffect(() => {
    gelenVeriler();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const handleMessage = async (name, email, description) => {
    const response = await axios.post('http://localhost:3004/Comment', {
      name,
      email,
      description,
    });

    const comeData = [...comments, response.data];
    setComments(comeData);
  };

  const mjVerileri = async () => {
    const response = await axios.get('http://localhost:3004/Comment');
    setComments(response.data);
  };

  useEffect(() => {
    mjVerileri();
  }, []);

  return (
    <div className="App">
      <div className="inputContainer">
        <InputMovie handleInput={onChangeInput} />
      </div>
      <div className="Container">
        <div className="space">Boşluk</div>
        <CartList movies={filteredMovies} />
        <div className="space">Boşluk</div>
      </div>
      <div className="MesajContainer">
        <div className="MjTitle">
          <h1> Yorum Atın Amk</h1>
        </div>
        <div className="MainMj">
          <MesajBox onCreateMessage={handleMessage} comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default Home;
