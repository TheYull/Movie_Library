import React from "react";
import s from "./CardInfo.module.scss";

export const CardInfo = ({ language, budget, revenue, countries, companies, genres,  homepage, duration, date }) => {
  const formatNumber = (number) => (!number ? "N/A" : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

  return (
    <div className={s.info}>
      <p><strong>Language: </strong>{language}</p>
      <p><strong>Budget: </strong>{formatNumber(budget)}</p>
      <p><strong>Revenue: </strong>{formatNumber(revenue)}</p>
      
      <div className={s.country_container}>
        <strong>Country:</strong> {countries.map((c) => <p key={c.iso_3166_1}>{c.name}</p>)}
      </div>

      <div className={s.companies_container}>
        <strong>Companies:</strong> {companies.map((c) => <p key={c.id}>{c.name}</p>)}
      </div>

      

      <div className={s.genre_container}>
        <strong>Genre:</strong> {genres.map((g) => <p key={g.id}>{g.name}</p>)}
      </div>

      <p>({duration}min)</p>
      <p><strong>Date:</strong> {date}</p>

      <p><strong>Посилання: </strong><a href={homepage}>Link</a></p>
    </div>
  );
};