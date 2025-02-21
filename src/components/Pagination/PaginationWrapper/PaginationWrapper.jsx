import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import PaginatedList from "../PaginatedList"; 
import { fetchContent } from "../../../features/content/contentApi";
import { fetchPerson } from "../../../features/persons/personApi";
import { MovieCard } from "../../../features/movies/MovieCard";
import { TVShowCard } from "../../../features/tvshows/TVShowCard";
import { PersonCard } from "../../../features/persons/PersonCard";

const PaginationWrapper = ({ type }) => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const currentPage = Math.min(parseInt(searchParams.get("page")) || 1, 500);

    const contentState = useSelector((state) => state.content || {});
    const persons = useSelector((state) => state.person?.data || []);
    const loading = useSelector((state) => state.content?.loading || state.person?.loading);
    const error = useSelector((state) => state.content?.error || state.person?.error);

    const prevParams = useRef({ category: null, type: null, page: null });

    useEffect(() => {
        if (
            prevParams.current.category !== category || 
            prevParams.current.type !== type || 
            prevParams.current.page !== currentPage
        ) {
            if (type === "person") {
                dispatch(fetchPerson({ page: currentPage }));
            } else {
                dispatch(fetchContent({ type, category, page: currentPage }));
            }
            prevParams.current = { category, type, page: currentPage };
        }
    }, [category, type, currentPage, dispatch]);

    // Карти контенту
    const renderContentCard = (item) => {
        switch (type) {
            case "movie":
                return <MovieCard key={item.id} movie={item} />;
            case "tv":
                return <TVShowCard key={item.id} tv={item} />;
            case "person":
                return <PersonCard key={item.id} person={item} />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <h1 className="headline">
                {type === "movie" ? "Movies" :
                 type === "tv" ? "TV Shows" :
                 "Popular People"} {category ? ` - ${category.replace(/_/g, " ")}` : ""}
            </h1>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!contentState.movies?.length && !contentState.tvshows?.length && !persons?.length && <p>No results found.</p>}

            <PaginatedList 
                endpoint={`/api/${type}/${category || "popular"}?`} 
                renderItem={renderContentCard}
            />
        </div>
    );
};

export default PaginationWrapper;
