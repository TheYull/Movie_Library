import { Card } from "../../components/Card/Card";
import { IMG_URL } from "../../config/config";

export const PersonCard = ({ person }) => {

    const imageUrl = person.profile_path
        ? `${IMG_URL}${person.profile_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <Card 
            id={person.id}
            image={imageUrl}
            title={person.name}
            subtitle={person.known_for_department}
            type="person"
        />
    )
}