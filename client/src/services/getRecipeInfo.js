import axios from "axios";

const axiosRecipeInfo = (source, id) => {
  return axios.get(`http://localhost:3001/recipes/${id}?source=${source}`);
};

export default axiosRecipeInfo;
