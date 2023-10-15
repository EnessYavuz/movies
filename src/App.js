import CartList from "./components/CartList";
import InputMovie from "./components/InputMovie";
import { useState } from "react";

const movies = [
  {
    id: 1,
    title: "BATMAN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus labore officia debitis blanditiis repellendus esse consectetur. Odio reiciendis cumque eos! Fugiat alias sunt repellat, optio soluta exercitationem similique pariatur?",
    IMDB: 7.0,
  },
  {
    id: 2,
    title: "SUPERMAN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus labore officia debitis blanditiis repellendus esse consectetur. Odio reiciendis cumque eos! Fugiat alias sunt repellat, optio soluta exercitationem similique pariatur?",
    IMDB: 7.0,
  },
  {
    id: 3,
    title: "FRİNGE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus labore officia debitis blanditiis repellendus esse consectetur. Odio reiciendis cumque eos! Fugiat alias sunt repellat, optio soluta exercitationem similique pariatur?",
    IMDB: 7.0,
  },
];

function App() {
  const [search, setSearch] = useState("");

  const onChangeInput = (event) => {
    setSearch(event.target.value);
  }

  const filteredMovies = movies.filter(
    (movie) => {
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }
  );

  return (
    <div className="App">
      <InputMovie handleInput={onChangeInput} />
      <CartList movies={filteredMovies} />
    </div>
  );
}

export default App;
