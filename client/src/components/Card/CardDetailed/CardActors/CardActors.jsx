import React from "react";
import s from "./CardActors.module.scss";
import { useNavigate } from "react-router-dom";
import { IMG_URL, NO_IMG } from "../../../../config/config";


export const CardActors = ({ actors }) => {
  const navigate = useNavigate();

  return (
    <div className={s.actors}>
      <h3>Актори:</h3>
      {actors.map((actor) => (
        <div key={actor.id} className={s.actor} onClick={() => navigate(`/person/${actor.id}`)}>
          <img src={actor.profile_path ? `${IMG_URL}${actor.profile_path}` : NO_IMG} alt={actor.name} />
          <h3>{actor.name}</h3>
        </div>
      ))}
    </div>
  );
};