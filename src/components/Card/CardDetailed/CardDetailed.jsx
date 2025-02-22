import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "./CardDetailed.module.scss";
import { BASE_URL, API_KEY, IMG_URL, DETAILED_IMG_BACKGROUND, NO_IMG } from "../../../config/config";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";
// import CardSlider from "./CardSlider/CardSlider";

export const CardDetailed = () => {
  const navigate = useNavigate();
  const { id, type } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      // console.log("Fetching details for person with ID:", id); 

      try {
        const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}&append_to_response=credits`);

        if (!response.ok) throw new Error("Failed to download data");
        const result = await response.json();
        // console.log("Data from API:", result);

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

const actors = data?.credits?.cast || [];
// console.log("Actors:", actors); 

const handleActorClick = (actorId) => {
  navigate(`/person/${actorId}`);
};

  return (
    <div className="container media">
      <div style={{ backgroundImage: `url(${`${DETAILED_IMG_BACKGROUND}${data.backdrop_path}`})`, backgroundSize: 'cover' }}>
      <div className={s.wrapper_details}>
        <div className={s.img_container}>
        <img src={`${IMG_URL}${data.poster_path}`} alt={data.title} />
        </div>
          <div className={s.wrapper_text_info}>
            <div className={s.title_container}>
            <h2>{data.title}{data.name}</h2>
            <div>
            <p><strong>{ data.vote_average } / 10</strong></p>
            <p><strong>Status: </strong>{data.status}</p>
            <p><strong>Date:</strong>{ data.release_date }</p>
            </div>
            </div>

            <p><strong>Language: </strong>{data.original_language}</p>
            <p><strong>Budget: </strong>{formatNumber(data.budget)}</p>
            <p><strong>Revenue: </strong>{formatNumber(data.revenue)}</p>
          
            <div className={s.country_container} >
            <strong>Country:</strong>
            {
            data.production_countries.map((country) => (
              <p key={country.iso_3166_1}>{country.name}</p>
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

            <p><strong>Посилання: </strong><a href={data.homepage}>Link</a></p>
          </div>
          
            {/* <CardSlider items={actors} type="person" /> */}
        </div>
        
        </div>
        <h2>Актори:</h2>
          <div className={s.actors}>
            {actors.map((actor) => (
                <div key={actor.id} className={s.actor} onClick={() => handleActorClick(actor.id)} >
                    <img src={actor.profile_path ? `${IMG_URL}${actor.profile_path}` : NO_IMG} alt={actor.name} />
                    <p>{actor.name}</p>
                </div>
            ))}
          </div>
          <div className={s.video_container}>
          <VideoPlayer type={type} id={id} />
          </div>
          
    </div>
  );
};
