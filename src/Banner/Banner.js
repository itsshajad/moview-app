import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Banner.css';
import Button from '../Layouts/Button';
import YoutubeVideoPlayer from '../MovieRaw/YoutubeVideoPlayer';

const Banner = (props) => {
  const [data, setData] = useState([]);

  const imgPath = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=c21c70709242dd71f2155bc6cd121d9e&language=en-US&page=1&region=US'
      );
      setData(apiData.data.results);
    };
    fetchData();
  }, []);

  const randomNo = Math.floor(Math.random() * data.length);

  const moviePlaying = data[randomNo];

  return (
    <>
      <div className="bannerBox">
        <div className="contentDetails">
          <div>
            <h1>{moviePlaying?.title}</h1>
            <p>{moviePlaying?.original_title}</p>

            <Button>Watch Trailer</Button>

            <p>{moviePlaying?.overview}</p>
          </div>
        </div>
        <img
          src={`${imgPath}${moviePlaying?.backdrop_path}`}
          alt={moviePlaying?.title}
        />
      </div>
      <YoutubeVideoPlayer isPopup />
    </>
  );
};

export default Banner;
