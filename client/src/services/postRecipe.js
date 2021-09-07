import axios from "axios";

const axiosRecipes = data => {
  return axios.post("http://localhost:3001/recipes",data);
};

export default axiosRecipes;
