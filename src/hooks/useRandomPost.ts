import { useMemo } from "react";
import useFetch from "./useFetch";

export const useRandomPost = () => {
  const randomPage = Math.floor(Math.random() * 50) + 1;
  const apiUrl = `/articles?tag=wecoded&page=${randomPage}&per_page=10`;

  const { data, loading } = useFetch(apiUrl);

  const path = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * data.length);
    const selected = data[randomIndex];
    return `/stories/${selected.user.username}/${selected.slug}`;
  }, [data]);

  return { path, loading };
};
