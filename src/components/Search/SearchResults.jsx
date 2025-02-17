import { useSelector } from 'react-redux';

const SearchResults = () => {
    const { searchResults, loading, error } = useSelector((state) => state.search);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!searchResults.length) return <p>no results</p>;
}
return (
  <div>
  {loading ? (
      <p>Loading...</p>
  ) : error ? (
      <p>Error: {error}</p>
  ) : !searchResults.length ? (
      <p>No results</p>
  ) : (
      searchResults.map((movie) => (
          <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </div>
      ))
  )}
</div>
)

export default SearchResults;