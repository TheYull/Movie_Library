import { Card } from "../../components/Card/Card";
import { IMG_URL } from "../../config/config";

export const MovieCard = ({ movie }) => {
  
  return (
    <Card
      id={movie.id}
      image={`${IMG_URL}${movie.poster_path}`}
      title={movie.title}
      subtitle={movie.release_date} 
      type="movie"
    />
  );
};
