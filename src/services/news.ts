import axios from 'axios';

// Ganti BASE_URL dengan URL ke serverless function Anda
const BASE_URL = 'https://kasa-news.vercel.app/api/news';

export const getTopHeadlines = async (country = 'us') => {
  try {
    // Karena logika untuk menambahkan API key dan parameter lainnya sudah dipindahkan ke serverless function,
    // Anda hanya perlu memanggil endpoint tersebut tanpa parameter tambahan
    const response = await axios.get(`${BASE_URL}`);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};
