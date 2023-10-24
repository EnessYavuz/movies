// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movie from "./components/Movie";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movie/:id" element={<Movie />} />
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
