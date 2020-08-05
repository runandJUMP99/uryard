import axios from "axios";

const instance = axios.create({
    baseURL: "https://uryard-421a5.firebaseio.com/"
});

export default instance;