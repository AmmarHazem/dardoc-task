import axios from "../axios";

export const searchMovies = async ({ searchText, page }) => {
  try {
    const res = await axios.get("/search/movie", {
      params: { query: searchText, page },
    });
    return res.data;
  } catch (e) {
    console.log("--- searchMovies error");
    console.log(e);
    return null;
  }
};
