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
  imgData,
}) {
  const movieClick = (e) => {
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
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
        id={id}
        title={title}
      />
      <div className="movie__rating">
        평점 <br />
        {rating}
      </div>
    </div>
  );
}

export default Movies;
