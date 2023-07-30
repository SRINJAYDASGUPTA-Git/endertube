import axios from "axios";
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const options = {
  params: {
    part: "snippet",
    maxResults: "50",
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
  headers: {},
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
