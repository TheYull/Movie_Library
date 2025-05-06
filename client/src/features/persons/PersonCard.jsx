import { Card } from "../../components/Card/Card";
import { IMG_URL, NO_IMG } from "../../config/config";

export const PersonCard = ({ person }) => {

    const imageUrl = person.profile_path
        ? `${IMG_URL}${person.profile_path}`
        : NO_IMG;

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