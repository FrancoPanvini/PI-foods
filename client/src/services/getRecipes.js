import axios from "axios";

const axiosRecipes = name => {
  if (name) return axios.get(`/recipes?name=${encodeURIComponent(name)}`);
  return axios.get("/recipes");
};

export default axiosRecipes;
