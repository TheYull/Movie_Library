import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../config/config";

export const useFetchDetails = (id, type) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&append_to_response=credits,alternative_titles,release_dates,watch/providers,images,keywords,videos,similar,recommendations,reviews,translations`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDetails();
  }, [id, type]);

  return { data, loading, error };
};