import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonDetails } from '../../../features/persons/personApi';
import { fetchPersonCredits } from '../../../features/persons/personFilmography/personCredits';
import { IMG_URL, NO_IMG } from '../../../config/config';
import { PersonFilmography } from '../../../features/persons/personFilmography/PersonFilmography';
import s from "./PersonDetailed.module.scss";

export const PersonDetailed = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const personState = useSelector(state => state.person || {});
    const personDetails = personState.personDetails; 
    
    const loading = personState.loading;
    const error = personState.error;
    
    const personFilmographyState = useSelector(state => state.personFilmography || {});
    const { credits = [], loading: creditsLoading, error: creditsError } = personFilmographyState;
    
    useEffect(() => {
        // console.log("Person ID:", id); 
        if (id) {
            dispatch(fetchPersonDetails(id)); 
            dispatch(fetchPersonCredits(id));
        }
    }, [dispatch, id]);

    if (loading) return <p>Loading person...</p>;
    if (error) return <p>Error loading personal data: {error}</p>;
    if (!personDetails) return <p>Data is not available</p>;


    // console.log("Person Details:", personDetails);
    // console.log("Credits:", credits);

    return (
        <div className="container media">
            {personDetails && (
                <div className={s.header_container}>
                    <div className={s.img_container}>
                        <img src={personDetails.profile_path ? `${IMG_URL}${personDetails.profile_path}` : NO_IMG} alt={personDetails.name} />
                    </div>
                    <div className={s.text_container}>
                        <h2>{personDetails.name}</h2>
                        <p>{personDetails.biography}</p>
                    </div>
                </div>
            )}
            <h2>Known For</h2>
            {creditsLoading && <p>Downloading the filmography...</p>}
            {creditsError && <p>Filmography error: {creditsError}</p>}
            <PersonFilmography credits={credits} />
            
        </div>
    );
};
