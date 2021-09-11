import axios from "axios";

const axiosRecipes = name => {
  if (name) return axios.get(`http://localhost:3001/recipes?name=${encodeURIComponent(name)}`);
  return axios.get("http://localhost:3001/recipes");
};

export default axiosRecipes;
