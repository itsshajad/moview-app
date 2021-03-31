import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Banner.css';
import Button from '../Layouts/Button';
import YoutubeVideoPlayer from '../MovieRaw/YoutubeVideoPlayer';

const Banner = (props) => {
  const [data, setData] = useState([]);
  const [videoPlayer, setVideoPlayer] = useState({
    movieId: '',
    open: false,
  });

  const imgPath = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=c21c70709242dd71f2155bc6cd121d9e&language=en-US&page=1&region=US'
      );

      const randomNo = Math.floor(Math.random() * apiData.data.results.length);
      const moviePlaying = apiData.data.results[randomNo];
      setData(moviePlaying);
    };
    fetchData();
  }, []);

  console.log(data);
  const movieTrailerHandler = () => {
    setVideoPlayer({ ...videoPlayer, movieId: data.id, open: true });
  };
  return (
    <>
      <div className="bannerBox">
        <div className="contentDetails">
          <div>
            <h1>{data?.title}</h1>
            <p>{data?.original_title}</p>

            <Button onClick={movieTrailerHandler}>Watch Trailer</Button>

            <p>{data?.overview}</p>
          </div>
        </div>
        <img src={`${imgPath}${data?.backdrop_path}`} alt={data?.title} />
      </div>

      {videoPlayer?.open && (
        <YoutubeVideoPlayer
          setVideoPlayer={setVideoPlayer}
          isPopup
          playerId={videoPlayer.movieId}
        />
      )}
    </>
  );
};

export default Banner;
