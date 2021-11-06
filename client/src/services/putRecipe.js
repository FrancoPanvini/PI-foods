import axios from "axios";

const axiosPutRecipes = (data) => {
  return axios.put(`/recipes/${data.id}`,data);
};

export default axiosPutRecipes;
