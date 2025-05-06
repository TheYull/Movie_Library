import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../config/config";
import s from "./VideoPlayer.module.scss";


export const VideoPlayer = ({ type, id }) => {
  const [videoKey, setVideoKey] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to retrieve video");
        
        const data = await response.json();
        const trailer = data.results.find(video => video.type === "Trailer") || data.results[0];

        if (trailer) {
          setVideoKey(trailer.key);
        } else {
          setError("Video not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchVideo();
  }, [id, type]);

  if (loading) return <p>Video download...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={s.video_container}>
      {videoKey ? (
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="Trailer"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Trailer not available</p>
      )}
    </div>
  );
};
