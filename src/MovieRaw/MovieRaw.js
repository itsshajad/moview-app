import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieRaw.css';
import Container from '../Layouts/Container';

export const MovieTile = ({ movieList }) => {
  const imgPath = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="tileImage">
      <img src={`${imgPath}${movieList?.poster_path}`} alt={movieList?.title} />
    </div>
  );
};

const MovieRaw = ({ request, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const instanse = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
    });
    async function fetchData() {
      const requestData = await instanse.get(request);
      setData(requestData?.data?.results);
      return requestData;
    }
    fetchData();
  }, [request]);

  return (
    <Container>
      <div className="movieSection">
        <h1>{title}</h1>
        {/* <div>
        <p>Day</p>
        <p>Week</p>
      </div> */}
        <div className="movieRawContainer">
          <div className="movieRawLine">
            {data.map((data) => (
              <MovieTile key={data.id} movieList={data} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MovieRaw;
