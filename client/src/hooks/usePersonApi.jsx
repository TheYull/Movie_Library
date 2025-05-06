import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../config/config';

export const usePersonApi = () => {
const api_url_person = `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`;
const [personList, setPersonList] = useState([]);

const getPerson = () => {
    fetch(api_url_person)
    .then((res) => res.json())
    .then((json) => setPersonList(json.results))
    .catch((err) => console.error("Error fetching persons:", err))
};
useEffect(() => {
    getPerson();
}, []);
  return personList;
}
