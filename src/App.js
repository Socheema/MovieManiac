import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./style.css";
import searchIcon from "./search.svg";

// const url = "";
const url = `http://www.omdbapi.com?apikey=9367a9ff`;
const movieOne = {
  Title: "Spiderman the Verse",
  Year: "2019–",
  imdbID: "tt12122034",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };
  useEffect(() => {
    searchMovies('spiderman');
  }, []);
  return (
    <div className="app">
      <h1>MovieManiac</h1>
      <div className="search">
        <input
          placeholder="search for Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.Title}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
