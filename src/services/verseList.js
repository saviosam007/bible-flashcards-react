import axios from "axios";

export const getVerses = () => {
  return axios.get("https://getbibleverses.free.beeceptor.com/verseList");
};

export const getFlashCardVerses = () => {
  return axios.get(
    "https://my-json-server.typicode.com/saviosam007/bibleverse/versesFlashCard"
  );
};
