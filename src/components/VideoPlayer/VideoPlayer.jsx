import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../config/config";



const VideoPlayer = ({ type, id }) => {
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`
        );
        const videos = response.data.results;
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setVideoKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, [type, id]);

  if (!videoKey) {
    return <p>No trailer available.</p>;
  }

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoKey}`}
      title="YouTube video player"
      className="video-player-frame"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;