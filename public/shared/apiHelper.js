import axios from "axios";

const API_DOMAIN = "LINK";

function apiHelper() {
  const someNameHere = {
    getThing: (param) =>
      axios.get(`${API_DOMAIN}cool-path/${param}`)
  };

  return someNameHere;
}

const api = apiHelper();
export default api;
