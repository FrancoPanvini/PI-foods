import axios from "axios";

const axiosDeleteRecipes = id => {
  return axios.delete(`http://localhost:3001/recipes?id=${id}`);
};

export default axiosDeleteRecipes;
