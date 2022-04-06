import axios from "axios";

export default async function apiGetAll(url) {
    try {
      const response = await axios.get(url);
      const data = await response.data.data;
      return data;
    } catch (error) {
      console.error(error);
    }
}
