import axios from "axios";

const BASEURL = "https://dog.ceo/api/breed/";
const IMGURL = "/images"


export default {
  search: function(query) {
    return axios.get(BASEURL + query + IMGURL);
  },
  breeds: function() {
    return axios.get('https://dog.ceo/api/breeds/list');
  },
  random: function() {
    return axios.get('https://dog.ceo/api/breeds/image/random');
  } 
};