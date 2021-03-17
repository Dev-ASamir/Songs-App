import axios from 'axios';
import { baseUrl } from '../common';
export const getSongs = async ({ limit }) => {
  const response = await axios.get(`${baseUrl}/songs?_start=20&_limit=${limit}`);
  try {
    return response;
  } catch (error) {
    return error;
  }
};

export const searchSongs = async () => {
  const response = await axios.get(`${baseUrl}/songs?_start=20`);
  try {
    return response;
  } catch (error) {
    return error;
  }
};

export const addYourSong = async ({ level, artist, title }) => {
  const response = await axios({
    method: 'post',
    url: `${baseUrl}/songs`,
    data: {
      id: title,
      level,
      artist,
      title,
      images: 'https://i.ibb.co/ZT1QJNf/download.jpg',
      search: title + ' ' + artist,
    },
  });
  try {
    return response;
  } catch (error) {
    return error;
  }
};
