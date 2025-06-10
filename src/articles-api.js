import axios from 'axios';

// defining axios default url

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(`/search?query=${topic}`);
  return console.log(response), response.data.hits;
};
