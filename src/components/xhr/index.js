import axios from 'axios';

const getItems = function () {
  return axios.get("http://localhost:4741/items");
};

const getItem = function (id) {
  return axios.get("http://localhost:4741/items" + id);
};

export { getItems, getItem };
