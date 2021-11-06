import axios from "axios";

const axiosRecipes = data => {
  return axios.post("/recipes",data);
};

export default axiosRecipes;
