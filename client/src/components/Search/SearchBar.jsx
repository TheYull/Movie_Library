import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../features/search/searchApi";
import { useNavigate } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../config/config";
import s from "./SearchBar.module.scss";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchSuggestions = async () => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/search/multi?query=${encodeURIComponent(
          query
        )}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setResults(data.results.slice(0, 5));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handlerSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchSearch(query));
      navigate(`/search?q=${query}`);
    }
  };

  const handleSelectItem = (item) => {
    setQuery("");
    setResults([]);

    if (item.media_type === "movie") {
      navigate(`/movie/${item.id}`);
    } else if (item.media_type === "tv") {
      navigate(`/tv/${item.id}`);
    } else if (item.media_type === "person") {
      navigate(`/person/${item.id}`);
    } else {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handlerSearch} className={s.search}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search.."
        onKeyDown={(e) => e.key === "Enter" && handlerSearch(e)}
      />
      {results.length > 0 && (
        <ul className={s.autocomplete}>
          {results.map((item) => (
            <li key={item.id} onClick={() => handleSelectItem(item)}>
              {item.title || item.name}
              <span className="text-sm text-gray-500 ml-2">
                ({item.media_type})
              </span>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
