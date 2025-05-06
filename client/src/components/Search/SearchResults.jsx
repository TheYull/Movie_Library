import { useSelector } from 'react-redux';
import { MovieCard } from '../../features/movies/MovieCard';

const SearchResults = () => {
    const { searchResults, loading, error } = useSelector((state) => state.search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!searchResults || !searchResults.length) return <p>No results</p>;

    return (
        <div className='subheader'>
            {searchResults.map((movie) => (
                <div key={movie.id}>
                    <MovieCard key={movie.id} movie={movie} />
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
