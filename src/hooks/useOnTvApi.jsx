import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../config/config";

export const useTVSerialApi = () => {
  const [tvList, setTVList] = useState([]);

  useEffect(() => {
    const getTVSerial = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        setTVList(data.results || []);
      } catch (err) {
        console.error("Error fetching TV serials:", err);
      }
    };

    getTVSerial();
  }, []);

  return tvList;
};