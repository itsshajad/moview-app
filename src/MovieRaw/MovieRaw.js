import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieRaw.css';
import Container from '../Layouts/Container';
import YoutubeVideoPlayer from './YoutubeVideoPlayer';

export const MovieTile = ({
  movieList,
  isSmallTile,
  setVideoPlayer,
  videoPlayer,
}) => {
  const imgPath = 'https://image.tmdb.org/t/p/original';

  const movieTrailerHandler = () => {
    setVideoPlayer({ ...videoPlayer, movieId: movieList.id, open: true });
  };

  return (
    <div className="tileImage" onClick={movieTrailerHandler}>
      <img
        src={`${imgPath}${
          isSmallTile ? movieList?.backdrop_path : movieList?.poster_path
        }`}
        alt={movieList?.title}
      />
    </div>
  );
};

const MovieRaw = ({ request, title, isSmallTile }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoPlayer, setVideoPlayer] = useState({
    movieId: '',
    open: false,
  });

  useEffect(() => {
    const instanse = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
    });
    async function fetchData() {
      const requestData = await instanse.get(request);
      setData(requestData?.data?.results);
      setLoading(requestData?.data?.results && false);
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
            {loading ? (
              <div className="tileSkelton">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <>
                {data.map((data) => (
                  <MovieTile
                    videoPlayer={videoPlayer}
                    setVideoPlayer={setVideoPlayer}
                    isSmallTile={isSmallTile}
                    key={data.id}
                    movieList={data}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {videoPlayer.open && (
        <YoutubeVideoPlayer
          request={request}
          playerId={videoPlayer?.movieId}
          setVideoPlayer={setVideoPlayer}
        />
      )}
    </Container>
  );
};

export default MovieRaw;
