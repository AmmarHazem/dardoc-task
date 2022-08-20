import { useEffect, useState } from "react";
import { getPopular } from "../api/moviesAPI";

const useGetPopularMovies = ({ page = 1 }) => {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    if (!page) return;
    (async () => {
      setLoading(true);
      const res = await getPopular({ page });
      setLoading(false);
      setPopularMovies(res);
    })();
  }, [page]);

  return [loading, popularMovies];
};

export default useGetPopularMovies;
