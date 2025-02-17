import { Card } from "../../components/Card/Card";

export const MovieCard = ({ movie }) => {
  
  return (
    <Card
      id={movie.id}
      image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      title={movie.title}
      subtitle={movie.release_date} 
      type="movie"
    />
  );
};
