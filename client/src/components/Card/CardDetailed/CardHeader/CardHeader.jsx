import React from "react";
import s from "./CardHeader.module.scss";
import { DETAILED_IMG_BACKGROUND, IMG_URL } from "../../../../config/config";

export const CardHeader = ({ title, name, backdrop, poster, vote, tagline, overview }) => {

  return (
    <div className={s.header} style={{ backgroundImage: `url(${DETAILED_IMG_BACKGROUND}${backdrop})`, backgroundSize: "cover" }}>
      <div className={s.wrapper_details}>
        <div className={s.img_container}>
          <img src={`${IMG_URL}${poster}`} alt={title || name} />
        </div>
        
        <div className={s.text_container}>
          <div className={s.wrapper_text_info}>
            <div className={s.title_container}>
              <h2>{title || name}</h2>
            </div>
            <p><strong>{vote} / 10</strong></p>
          </div>
          <div className={s.info_container}>
            <p><strong>Slogan: </strong>«{tagline}»</p>
            <p>{overview}</p>
          </div>
        </div>

      </div>
    </div>
  );
};