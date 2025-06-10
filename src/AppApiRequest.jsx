// lets talk about
// Division of responsibility

// its not wise to keep all property of api at App.jsx its better to put it
// in its better to put it in difrient js file its becasue there can be many
// of them and can be easly lost to keep files clear and tidy

// src/artilces-api.js
// import axios from 'axios';

// // defining axios default url

// axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";

// export const fetchArticlesWithTopic = async topic => {
//     const response = axios.get(`/search?query=${topic}`);
//     return (await response).data.hits;
// }

// now to use it we jeust need to import them from file

// 1. Importing js
import { fetchArticlesWithTopic } from './articles-api';
import { ArticlesList } from './ArticlesList';

const AppApiRequest = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        // 2. Using function from articles
        const data = await fetchArticlesWithTopic('react');
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticlesList items={articles} />}
    </div>
  );
};

export default AppApiRequest