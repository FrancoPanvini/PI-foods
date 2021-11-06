import axios from "axios";

const axiosRecipeInfo = (source, id) => {
  return axios.get(`/recipes/${id}?source=${source}`);
};

export default axiosRecipeInfo;
