import axios from "axios";

const axiosDiets = () => {
  return axios.get("http://localhost:3001/diets");
};

export default axiosDiets;
