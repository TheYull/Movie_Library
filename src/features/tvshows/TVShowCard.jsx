import { Card } from "../../components/Card/Card";

export const TVShowCard = ({ tv }) => {
    // console.log("TVShow object:", tv); 
  return (
      <Card 
        id={tv.id}
        image={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
        title={tv.title}
        subtitle={tv.release_date}
        type="tv"
      />
  );
};

