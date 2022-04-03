import axios from "axios";

const BASE_URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1';

const apiGet = () => {
    axios.get(`${BASE_URL}`)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}

export default apiGet;
