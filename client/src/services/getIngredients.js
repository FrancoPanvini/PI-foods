import axios from "axios";

const axiosIngredients = () => {
  return axios.get("http://localhost:3001/ingredients");
};

export default axiosIngredients;
