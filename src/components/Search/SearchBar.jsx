import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../features/search/searchApi";

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handlerSearch = (e) => {
    e.preventDefault();
    if(query.trim()) {
      dispatch(fetchSearch(query));
    }
  }

  return (
    <form onSubmit={handlerSearch}>
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search.."
      />
    </form>
  )
};
