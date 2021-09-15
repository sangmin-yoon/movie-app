//import Movies from "./Movies";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import "./Home.css";
import Movies from "./Movies";
import Detail from "./Detail";
dotenv.config();

function Home() {
  console.log();
  const [movieData, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieD, setMovieD] = useState(null);

  const childData = (number) => {
    setMovieD(number);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(null);
        setLoading(null);
        setLoading(true);
        const {
          data: { results },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API}`
        );
        setMovies(results);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="loading">로딩중...</div>;
  if (error) return <div className="error">에러가 발생했습니다</div>;
  if (!movieData) return null;

  return (
    <div className="main">
      <div className="main__movies">
        {movieData.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            year={movie.release_date}
            title={movie.title}
            summary={movie.overview}
            poster={movie.poster_path}
            backimg={movie.backdrop_path}
            rating={movie.vote_average}
            childData={childData}
          />
        ))}{" "}
      </div>
      {movieD === null ? (
        <div>
          <Detail />
        </div>
      ) : (
        <div className="main__detail">
          <Detail
            title={movieD.current.attributes.title.value}
            summary={movieD.current.attributes.summary.value}
            backimg={movieD.current.attributes.backimg.value}
            year={movieD.current.attributes.year.value}
            rating={movieD.current.attributes.rating.value}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
