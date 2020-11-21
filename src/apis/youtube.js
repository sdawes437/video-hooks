import axios from "axios";

const KEY = "AIzaSyA89UT0Z5ttpOMv3UpxVTYCd_agmhP5IqY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
