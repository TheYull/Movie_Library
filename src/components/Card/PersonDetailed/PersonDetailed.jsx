import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL, IMG_URL, NO_IMG } from '../../../config/config';
import s from "./PersonDetailed.module.scss"

export const PersonDetailed = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {

            try {
                const response = await fetch(`${BASE_URL}/person/${id}?api_key=${API_KEY}`);

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
          }else {
            console.error("No ID provided!");
        }
    },[id]);

    if (loading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка: {error}</p>;
    if (!data) return <p>Дані відсутні</p>;
    
    const formatNumber = (number) => {
    if (!number) return "N/A";
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    

  return (
    <div className="container media">
        <div className={s.header_container}>
            <div className={s.img_container}>
            <img src={data.profile_path ? `${IMG_URL}${data.profile_path}` : NO_IMG} alt={data.name} />
            </div>
            <div className={s.text_container}>
                <h2>{data.name}</h2>
                <p>{data.biography}</p>
            </div>
        
        </div>
       <h2>Known For</h2> 
    </div>
  )
}
