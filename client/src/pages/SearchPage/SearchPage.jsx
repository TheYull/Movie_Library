import React from "react";
import SearchResults from "../../components/Search/SearchResults";

const SearchPage = () => {
    return (
        <div className='container'>
            <h2 className="headline">Search Results</h2>
            <SearchResults />
        </div>
    );
};

export default SearchPage;
