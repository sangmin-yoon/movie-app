import React, { useRef } from "react";
import "./Movies.css";

function Movies({
  poster,
  title,
  backimg,
  id,
  summary,
  year,
  rating,
  childData,
}) {
  const movieClick = (e) => {
    const M = e.target;
    childData(nameClick);
  };

  const nameClick = useRef();

  return (
    <div
      className="movie"
      title={title}
      summary={summary}
      backimg={backimg}
      year={year}
      rating={rating}
      onClick={movieClick}
      ref={nameClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={title}
        id={id}
        title={title}
      />
    </div>
  );
}

export default Movies;
