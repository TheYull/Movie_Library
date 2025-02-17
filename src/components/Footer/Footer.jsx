import React from "react";
import TMDB from "../../assets/TMDB.svg";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.Footer}>
      <p>
        "This product uses the TMDB API but is not endorsed or certified by
        TMDB."
      </p>
      <img src={TMDB} alt="TMDB" className={s.TMDB} />
      <p>@My project 2025</p>
    </div>
  );
};
