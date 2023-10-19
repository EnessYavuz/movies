// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movie/:id" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
