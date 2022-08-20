import { useState, useEffect } from "react";
import { searchMovies } from "../api/searchAPI";

const useSearchMovies = ({ searchText, page = 1 }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!page || !searchText) return;
    (async () => {
      setLoading(true);
      const res = await searchMovies({ searchText, page });
      setLoading(false);
      setResponse(res);
    })();
  }, [page, searchText]);

  return [loading, response];
};

export default useSearchMovies;
