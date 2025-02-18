import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./CardDetailed.module.scss";
import { BASE_URL, API_KEY, IMG_URL } from "../../../config/config";

export const CardDetailed = () => {
  const { id, type } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);

        if (!response.ok) throw new Error("Failed to download data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id, type]);

if (loading) return <p>Завантаження...</p>;
if (error) return <p>Помилка: {error}</p>;
if (!data) return <p>Дані відсутні</p>;

const formatNumber = (number) => {
if (!number) return "N/A";
return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

  return (
    <div className="container media">
      <div style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${data.backdrop_path}`})`, backgroundSize: 'cover' }}>
      <div className={s.wrapper_details}>
        <div className={s.img_container}>
        <img src={`${IMG_URL}${data.poster_path}`} alt={data.title} />
        </div>
          <div className={s.wrapper_text_info}>
            <div className={s.title_container}>
            <h2>{data.title}</h2>
            <div>
            <p><strong>{ data.vote_average } / 10</strong></p>
            <p><strong>Status: </strong>{data.status}</p>
            <p><strong>Date:</strong>{ data.release_date }</p>
            </div>
            </div>

            <p><strong>Language: </strong>{data.original_language}</p>
            <p><strong>Budget: </strong>{formatNumber(data.budget)}</p>
            <p><strong>Revenue: </strong>{formatNumber(data.revenue)}</p>
          
            <div className={s.country_container}>
            <strong>Country:</strong>
            {
            data.production_countries.map((country) => (
              <p key={country.id}>{country.name}</p>
            ))}
            </div>

            <div className={s.companies_container} >
              <strong>Companies:</strong>
              <div className={s.text_container}>
              {
                data.production_companies.map((companies) => (
                  <p key={companies.id}>{companies.name}</p>
                ))
              }
              </div>
            </div>
            <p ><strong>Slogan:  </strong>«{data.tagline}»</p>
            <p>{data.overview}</p>
            
            <div className={s.genre_container}>
            <strong>Genre:</strong>
            {data.genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
            </div>

              <p><strong>Посилання: </strong><a href={data.homepage}></a></p>
          </div>
        </div>
        </div>
    </div>
  );
};
