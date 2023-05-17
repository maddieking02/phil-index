require('dotenv').config();
import axios from 'axios';

export const searchPaper = () => {
  const auth = {
    url: `https://philpapers.org/philpapers/raw/categories.json?apiId=${process.env.API_ID}&apiKey=${process.env.API_KEY}`,
  }
  return axios.get(auth.url);
}