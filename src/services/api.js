import axios from "axios";

export async function apiGetAll(url) {
    try {
      const response = await axios.get(url);
      const data = await response.data.data;
      return data;
    } catch (error) {
      console.error(error);
    }
}

export async function apiGetAnime(url) {
  try {
    const response = await axios.get(url);
    const data = await response.data.data;
    return data;
  } catch(error) {
    console.log(error)
  }
}
