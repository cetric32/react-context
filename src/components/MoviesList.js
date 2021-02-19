import React, { useContext, useState } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

export default function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
