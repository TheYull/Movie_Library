import React from "react";
import s from "./Card.module.scss";
import { useNavigate } from "react-router-dom";
import { NO_IMG } from "../../config/config";

export const Card = ({ id, image, title, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id && type) {
      navigate(`/${type}/${id}`); 
    } else {
      console.error("Error: ID is undefined");
    }
  };

  return (
    <div className={s.Card} onClick={handleClick}>
      <div className={s.containerCard}>
        <img src={image} alt={title} onError={(e) => e.target.src = NO_IMG} />
        <h3>{title}</h3>
      </div>
    </div>
  );
};