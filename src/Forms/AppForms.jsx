import { fetchArticlesWithTopic } from '../articles-api';
import { ArticlesList } from '../ArticlesList';
import { SearchForm } from './SearchForm';
import { useState } from 'react';

const AppForms = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // becasue we are awaing a topic that is form user input we
  // can use async function that await topic input
  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      // we are using topic from input and assining it to const data
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading your resaults...</p>}
      {error && <p>Whoops there was an error</p>}
      {articles.length > 0 && <ArticlesList items={articles} />}
    </div>
  );
};

export default AppForms;
