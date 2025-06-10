export const ArticlesList = ({ items }) => {
  // here {items} are deconstruction of props
  // that this component awaits
  return (
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};
