import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MovieTile = ({ movieList }) => {
  return (
    <div>
      {movieList.title}
      <p>{movieList.poster_path}</p>
    </div>
  );
};

const Raw = ({ request }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const instanse = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
    });
    async function fetchData() {
      const requestData = await instanse.get(request);
      setData(requestData?.data?.results);
      console.log(requestData);
      return requestData;
    }
    fetchData();
  }, [request]);

  return (
    <div>
      <h1>Trending</h1>
      {data.map((data) => (
        <MovieTile key={data.id} movieList={data} />
      ))}
    </div>
  );
};

export default Raw;
