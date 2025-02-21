import { Card } from "../../components/Card/Card"
import { IMG_URL, NO_IMG } from "../../config/config";

export const OnTvCard = ({ tv }) => {

    if (!tv || !tv.id) {
        return <p>Loading... або No data available</p>;
    }
  return (
    <Card 
      id={tv.id}
      image={tv.poster_path ? `${IMG_URL}${tv.poster_path}` : NO_IMG}
      title={tv.name}
      subtitle={tv.first_air_date ? tv.first_air_date : "Unknown"}
      type="tv"
    />
  );
};

