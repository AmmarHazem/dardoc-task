import { useEffect, useState } from "react";
import { getMovieCategory } from "../api/moviesAPI";

const useGetMovieCategory = ({ endpoint, page = 1 }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!page) return;
    (async () => {
      setLoading(true);
      const res = await getMovieCategory({ endpoint, page });
      setLoading(false);
      setResponse(res);
    })();
  }, [page, endpoint]);

  return [loading, response];
};

export default useGetMovieCategory;
