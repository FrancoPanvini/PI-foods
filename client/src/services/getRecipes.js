import axios from "axios";

const axiosRecipes = () => {
  return axios.get("http://localhost:3001/recipes");
};

export default axiosRecipes;
