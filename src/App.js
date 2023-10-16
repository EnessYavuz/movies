import CartList from "./components/CartList";
import InputMovie from "./components/InputMovie";
import { useState } from "react";
import * as images from "./components/Images";

const movies = [
  {
    id: 1,
    title: "BATMAN",
    image: images.jokerImage,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 2,
    title: "SUPERMAN",
    image: images.jokerImage,

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 3,
    title: "Ninja Turtles",
    image: images.jokerImage,

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 4,
    title: "Love And Mosters",
    image: images.jokerImage,

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 5,
    title: "Harry Potter",
    image: images.jokerImage,

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 6,
    title: "Lord of Rings",
    image: images.jokerImage,

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 7,
    title: "Joker",
    image: images.jokerImage,

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 8,
    title: "Fury",
    image: images.jokerImage,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
  {
    id: 9,
    title: "Fight Club",
    image: images.jokerImage,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    IMDB: 7.0,
  },
];

function App() {
  const [search, setSearch] = useState("");

  const onChangeInput = (event) => {
    setSearch(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="App">
      <div className="inputContainer">
        <InputMovie handleInput={onChangeInput} />
      </div>
      <div className="Container">
        <div class="space">Boşluk</div>

        <CartList movies={filteredMovies} />

        <div class="space">Boşluk</div>
      </div>
    </div>
  );
}

export default App;
