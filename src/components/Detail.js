import React from "react";
import "./Detail.css";

function Detail({ title, backimg, year, rating, summary }) {
  return (
    <div className="detail">
      {backimg ? (
        <img src={`https://image.tmdb.org/t/p/w500${backimg}`} alt={title} />
      ) : (
        <span>이미지를 클릭해주세요</span>
      )}
      <div className="detail__textarea">
        <h1>{title}</h1>
        <h2>{year}</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Detail;
