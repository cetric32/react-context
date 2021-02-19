import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Porter",
      price: "$10",
      id: Math.random(),
    },
    {
      name: "GoT",
      price: "$10",
      id: Math.random(),
    },
    {
      name: "Vikings",
      price: "$10",
      id: Math.random(),
    },
    {
      name: "Inception",
      price: "$10",
      id: Math.random(),
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
