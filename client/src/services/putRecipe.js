import axios from "axios";

const axiosPutRecipes = (data) => {
  return axios.put(`http://localhost:3001/recipes/${data.id}`,data);
};

export default axiosPutRecipes;
