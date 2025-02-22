import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../features/search/searchApi";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSearch = (e) => {
    e.preventDefault();
    if(query.trim()) {
      dispatch(fetchSearch(query));
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handlerSearch}>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search.."
        onKeyDown={(e) => e.key === "Enter" && handlerSearch(e)}
      />
    </form>
  );
};