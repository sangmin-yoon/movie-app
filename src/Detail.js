import React from "react";

function Detail({ title, backimg, year, rating, summary }) {
  return (
    <div className="detail">
      <img src={`https://image.tmdb.org/t/p/w500${backimg}`} />
      <h1>{title}</h1>
      <h2>
        {year},{rating}
      </h2>
      <p>{summary}</p>
    </div>
  );
}

export default Detail;
