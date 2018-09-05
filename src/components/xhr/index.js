import axios from 'axios';

const api = 'https://srcollectionsapi.herokuapp.com/api' || 'http://localhost:4741'

const getItems = function () {
  return axios.get(api + "/items");
};

const getItem = function (id) {
  return axios.get(api + "/items/" + id);
};

export { getItems, getItem };
