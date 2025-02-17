import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchContent } from "../../features/content/contentApi";
import { MovieCard } from "../../features/movies/MovieCard";
import { TVShowCard } from "../../features/tvshows/TVShowCard";

export const FilterPage = () => { 
    const { type, category } = useParams();
    const dispatch = useDispatch();
    
    const contentState = useSelector((state) => state.content || {});
    const { loading, error } = contentState;

    const prevParams = useRef({ category: null, type: null });
  
    useEffect(() => {
        if (prevParams.current.category !== category || prevParams.current.type !== type) {
            if (type === "peron"){
                dispatch(fetchPerson());
            } else {
                dispatch(fetchContent({ type, category }));
            }
            prevParams.current = { category, type };
        }
    }, [category, type, dispatch]);
    
    const typeMap = {
        movie: {title: "Movies", list: contentState.movies || []},
        tv: {title: "TV Show", list: contentState.tvshows || []},
    }
    const { title, list } = typeMap[type] || { title: "Unknown", list: [] };

    const ContentCard = ({ type, item }) => {
        switch (type) {
            case "movie":
                return <MovieCard key={item.id} movie={item} />;
            case "tv":
                return <TVShowCard key={item.id} tv={item} />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <h1 className="headline">{title} - {category.replace(/_/g, " ")}</h1>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!list?.length && <p>No results found.</p>}
            <div className="subheader">
                {list.map((item) => 
                    <ContentCard key={item.id} type={type} item={item}/>
                )}

            </div>
        </div>
    );    
};

  