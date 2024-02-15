import axios from 'axios';

const API_KEY = '82c79a6612464ffb81a6ec58c24cb404';
const API_KEY2 = 'cb19a0d47e124e289849803000737fd1';
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (country = 'in') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY2}&pageSize=4`);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};

export const getEverything = async (query = '', pageSize = 5) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY2}&pageSize=${pageSize}`);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};

export const searchNews = async (query = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY2}&pageSize=10`);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};
