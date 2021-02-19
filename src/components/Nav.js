import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function Nav() {
  const [movies] = useContext(MovieContext);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <h3>Cetric Lihalakha</h3>
      <p>
        Movies List:{" "}
        <span style={{ paddingLeft: "3px", color: "red" }}>
          {movies.length}
        </span>{" "}
      </p>
    </div>
  );
}
