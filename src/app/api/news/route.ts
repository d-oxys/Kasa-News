import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = '82c79a6612464ffb81a6ec58c24cb404';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  const country = req.query.country || 'us';

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: country,
        apiKey: API_KEY,
        pageSize: 6,
      },
    });

    res.status(200).json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
}
