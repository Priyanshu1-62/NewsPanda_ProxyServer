import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.NEWS_API_KEY;

app.get('/news', async (req, res) => {
  const {
    country = 'us',
    language = 'en',
    sortBy = 'popularity',
    category = 'general',
    page = 1,
    pageSize = 9,
  } = req.query;

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country,
        language,
        sortBy,
        category,
        apiKey: API_KEY,
        page,
        pageSize,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error('Error fetching news:', err.message);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Proxy server running on port ${PORT}`);
});