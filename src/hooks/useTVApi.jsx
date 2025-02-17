import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../config/config";

export const useTVSerialApi = () => {
    const api_url_tv_serial = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1`;
    const [tvList, setTVList] = useState([]);

    const getTVSerial = () => {
        fetch(api_url_tv_serial)
        .then((res) => res.json())
        .then((json) => setTVList(json.result))
        .catch((err) => console.error("Error fetching TVserial:", err))
    };
    useEffect(() => {
        getTVSerial();
    }, []);
    return tvList;
}
