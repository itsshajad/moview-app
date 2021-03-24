import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Banner.css';

const Banner = (props) => {
  const [data, setData] = useState([]);

  const imgPath = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=c21c70709242dd71f2155bc6cd121d9e&language=en-US&page=1&region=in'
      );
      setData(apiData.data.results);
    };
    fetchData();
  }, []);

  const randomNo = Math.floor(Math.random() * data.length);

  const moviePlaying = data[randomNo];

  console.log(data[randomNo]);

  return (
    <div className="bannerBox">
      <div className="contentDetails">
        <p>{moviePlaying?.title}</p>
      </div>
      <img
        src={`${imgPath}${moviePlaying?.backdrop_path}`}
        alt={moviePlaying?.title}
      />
    </div>
  );
};

export default Banner;
