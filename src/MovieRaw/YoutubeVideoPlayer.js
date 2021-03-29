import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YoutubeVideoPlayer = ({ playerId, setVideoPlayer, isPopup }) => {
  const request = `movie/${playerId}/videos?api_key=c21c70709242dd71f2155bc6cd121d9e&language=en-US`;

  const [data, setData] = useState();

  useEffect(() => {
    const instanse = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
    });
    async function fetchData() {
      const requestData = await instanse.get(request);

      const setRandomData = Math.round(
        Math.random() * requestData.data.results.length
      );

      setData(
        requestData.data.results && requestData.data.results[setRandomData]
      );

      return requestData;
    }
    fetchData();
  }, [request]);

  const handleClose = () => {
    setVideoPlayer(false);
  };

  return (
    <div className={`relative ${isPopup ? 'videoPopup' : ''}`}>
      <div className="closeIcon" onClick={handleClose}>
        &#10005;
      </div>
      <iframe
        width="100%"
        height="456"
        src={`https://www.youtube.com/embed/${data?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideoPlayer;
