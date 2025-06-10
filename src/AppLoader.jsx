import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArticlesList } from './ArticlesList';

// 1) To add loader we need to use state that at initial value will be false
// an will change when for example awaiting requested data
// to do that we need to change state when requested was send and
// to set it back to false when data was recived

export const AppLoader = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  /* effect code */
  useEffect(() => {
    async function fetchArticles() {
      try {
        // 1a) Here we set loading state to true
        setLoading(true);
        const response = await axios.get(
          'https://hn.algolia.com/api/v1/search?query=react'
        );
        setArticles(response.data.hits);
      } catch (error) {
        // handling error
        console.error;
      } finally {
        // 1b) and here we use property of promise "finaly"
        // to change loading again to false
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {/*2) this line makes sure that loader is display when 
                state loading is true  */}
      {loading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticlesList items={articles} />}
    </div>
  );
};

// // here are links to usefull loaders 
// https://www.npmjs.com/package/react-spinners
// https://mhnpd.github.io/react-loader-spinner/docs/intro/
// https://github.com/danilowoz/react-content-loader?tab=readme-ov-file#features