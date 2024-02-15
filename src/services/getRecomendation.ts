export const getRecommendation = async () => {
  const API_KEY = '82c79a6612464ffb81a6ec58c24cb404';
  const API_KEY2 = 'cb19a0d47e124e289849803000737fd1';
  try {
    // Replace with your API endpoint
    const response = await fetch(`https://newsapi.org/v2/everything?q=anime&apiKey=${API_KEY2}&pageSize=4`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error; // Add this line
  }
};
