import axios from 'axios';

const API_KEY = '82c79a6612464ffb81a6ec58c24cb404';
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (country = 'us') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=6`);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};
