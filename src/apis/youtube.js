import axios from "axios";

const KEY = "AIzaSyDK6aBGptzLMdqnn1wEC8TfmrDwitywn1M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
