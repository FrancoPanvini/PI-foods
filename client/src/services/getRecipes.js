import axios from "axios";

const axiosRecipes = name => {
  console.log(name)
  if (name) return axios.get(`http://localhost:3001/recipes?name=${name}`);
  return axios.get("http://localhost:3001/recipes");
};

export default axiosRecipes;
