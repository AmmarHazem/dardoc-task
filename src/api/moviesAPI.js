import axios from "../axios";

export const getMovieCategory = async ({ endpoint, page = 1 }) => {
  try {
    const res = await axios.get(endpoint, { params: { page } });
    return res.data;
  } catch (e) {
    console.log("--- getMovieCategory error");
    console.log(endpoint);
    console.log(e);
    return null;
  }
};

export const getUpcoming = async ({ page = 1 }) => {
  try {
    const res = await axios.get("/movie/upcoming", { params: { page } });
    return res.data;
  } catch (e) {
    console.log("--- getUpcoming error");
    console.log(e);
    return null;
  }
};

export const getPopular = async ({ page = 1 }) => {
  try {
    const res = await axios.get("/movie/popular", { params: { page } });
    return res.data;
  } catch (e) {
    console.log("--- getPopular error");
    console.log(e);
    return null;
  }
};

export const getTopRated = async ({ page = 1 }) => {
  try {
    const res = await axios.get("/movie/top_rated", { params: { page } });
    return res.data;
  } catch (e) {
    console.log("--- getTopRated error");
    console.log(e);
    return null;
  }
};
