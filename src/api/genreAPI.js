import axios from "../axios";

export const getMovieGenres = async () => {
  try {
    const res = await axios.get("/genre/movie/list");
    return res.data.genres;
  } catch (e) {
    console.log("--- getMovieGenres error");
    console.log(e);
    return null;
  }
};
