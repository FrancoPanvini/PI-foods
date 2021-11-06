import axios from "axios";

const axiosDeleteRecipes = id => {
  return axios.delete(`/recipes?id=${id}`);
};

export default axiosDeleteRecipes;
