import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

export default function AddMovie() {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [setMovies] = useContext(MovieContext);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <form
        style={{
          margin: "5px",
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setMovies((prevMovies) => [
            { name, price, id: Math.random() },
            ...prevMovies,
          ]);
          setPrice("");
          setName("");
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="movie name"
          style={{ padding: "5px", margin: "5px" }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />{" "}
        <input
          type="text"
          name="price"
          id="price"
          placeholder="price"
          style={{ padding: "5px", margin: "5px" }}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
        <input
          type="submit"
          value="+ Add"
          style={{ padding: "5px", margin: "5px" }}
        />
      </form>
    </div>
  );
}
