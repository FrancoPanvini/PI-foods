import axios from "axios";

const axiosIngredients = () => {
  return axios.get("/ingredients");
};

export default axiosIngredients;
