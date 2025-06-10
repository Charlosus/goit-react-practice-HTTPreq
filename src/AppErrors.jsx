// as always errors in programing are invetable so we need to add error
// handling of errors to be prepare for it to do it we need to use state

import { useEffect, useState } from 'react';
import { ArticlesList } from './ArticlesList';

export const AppErrors = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get(
          // we have broken url to force error
          '<https://hn.anlgolia.com/api/v1/search?query=react>'
        );
        setArticles(response.data.hits);
      } catch (error) {
        // setting error state to true
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  // rest of a code
  // now you can use state of error to display alert for user

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait ...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticlesList items={articles} />}
    </div>
  );
};
