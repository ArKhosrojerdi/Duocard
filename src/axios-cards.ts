import axios from "axios";

const instance = axios.create({
  baseURL: "https://getman-ff51a-default-rtdb.firebaseio.com/"
})

export default instance;
