import React from "react";
import { IMG_URL, NO_IMG } from "../../../config/config";
import s from "./PersonFilmography.module.scss";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const PersonFilmography = ({ credits }) => {
  const navigate = useNavigate();

  const handleClick = (credit) => {
    navigate(`/${credit.media_type}/${credit.id}`);
  };

  if (!credits || !Array.isArray(credits) || credits.length === 0) {
    return <p>No information about the filmography</p>;
  }

  const creditsWithKeys = credits.map(credit => ({
    ...credit,
    key: uuidv4()
  }));


  return (
    <div className={s.filmography}>
      {creditsWithKeys.map((credit) => (
        <div key={credit.key} className={s.card} onClick={() => handleClick(credit)} >
          <img
            src={credit.poster_path ? `${IMG_URL}${credit.poster_path}` : NO_IMG}
            alt={credit.title || credit.name}
          />
          <h3>{credit.title || credit.name}</h3>
          <p>{credit.media_type === "movie" ? "Movie" : "TV Serial"}</p>
          <p>{credit.release_date || credit.first_air_date || "Date unknown"}</p>
        </div>
      ))}
    </div>
  );
};
