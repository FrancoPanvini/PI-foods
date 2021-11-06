import axios from "axios";

const axiosDiets = () => {
  return axios.get("/diets");
};

export default axiosDiets;
