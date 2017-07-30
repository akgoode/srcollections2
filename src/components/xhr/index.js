import axios from 'axios';

const getItems = function () {
  return axios.get("http://localhost:4741/items");
};

export default getItems;
