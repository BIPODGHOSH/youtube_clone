import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const apiData = async (url) => {
  try {
    const responce = await axios.get(`${BASE_URL}/${url}`, options);
    const data = responce.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
