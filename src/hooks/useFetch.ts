import { useState, useEffect } from "react";
import useApi from "./useApi";

function useFetch<T = unknown>(apiUrl: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const api = useApi();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (apiUrl) {
        try {
          const response = await api.get(apiUrl);
          setData(response.data);
        } catch (error) {
          console.error("Error: ", error);
          setData(null);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading };
}

export default useFetch;
