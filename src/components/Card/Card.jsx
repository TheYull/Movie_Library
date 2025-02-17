import React from "react";
import s from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

export const Card = ({ id, image, title, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/card/${type}/${id}`); 
    } else {
      console.error("Error: ID is undefined");
    }
  };

  return (
    <div className={s.Card} onClick={handleClick}>
      <div className={s.containerCard}>
        <img src={image} alt={title} onError={(e) => e.target.src = "https://via.placeholder.com/500x750?text=Error+Loading"} />
        <h3>{title}</h3>

      </div>
    </div>
  );
};