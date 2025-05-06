import { Card } from "../../components/Card/Card";
import { IMG_URL } from "../../config/config";

export const TVShowCard = ({ tv }) => {
    // console.log("TVShow object:", tv); 
  return (
      <Card 
        id={tv.id}
        image={`${IMG_URL}${tv.poster_path}`}
        title={tv.title}
        subtitle={tv.release_date}
        type="tv"
      />
  );
};

